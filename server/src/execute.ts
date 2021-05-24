import path from 'path';
import fs from 'fs';
import { Options, PythonShell } from 'python-shell';
import { Request, Response } from 'express';

export type Cell = {
  cell_type: string;
  execution_count: number;
  source: Array<string>;
};

const pythonOptions: Options = {
  mode: 'text',
  pythonPath:
    process.env.python_path || '/home/shivam/miniconda3/envs/datasc/bin/python'
};

function fun(data: string, res: Response) {
  PythonShell.run(
    path.join(__dirname, '../predict.py'),
    { args: [data], ...pythonOptions },
    (err, result) => {
      if (err) console.error(err);

      res.set('Cache-Control', 'public, max-age=31557600, immutable');
      res.send(result ? result[0] : null);
    }
  );
}

export function predict(req: Request, res: Response): void {
  const body = req.body;
  const arr = [
    body.sex === 'male' ? 1 : 0,
    body.sex === 'female' ? 1 : 0,
    body.embarked === 'S' ? 1 : 0,
    body.embarked === 'C' ? 1 : 0,
    body.embarked === 'Q' ? 1 : 0,
    1,
    body.pclass,
    body.age,
    body.sibSp,
    body.parch,
    body.fare
  ];
  const data = JSON.stringify(arr);
  try {
    if (!fs.existsSync(path.join(__dirname, '../model_joblib'))) {
      PythonShell.run(
        path.join(__dirname, '../WebApp_test.py'),
        pythonOptions,
        (err) => {
          if (err) console.error(err);
          else fun(data, res);
        }
      );
    } else fun(data, res);
  } catch (err) {
    console.error(err);
  }
}
