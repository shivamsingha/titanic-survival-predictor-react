import numpy as np
import joblib
import json
import sys
loaded_model = joblib.load("model_joblib")

arr=json.loads(sys.argv[1])
a = np.asarray(arr).reshape(1,-1)
print(loaded_model.predict(a)[0])
