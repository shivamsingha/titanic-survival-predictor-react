
# coding: utf-8

# The following notebook will take in a sample dataset, perform exploratory data analysis, and build a machine learning model for you. All you are expected to do is to run this Interactive Jupyter Notebook once. Your task is to build a web based application using web frameworks that are commonly used to deploy machine learning models to the web. Using MERN stack for creating and maintaining the webapp will positively affect the evaluation process of your application although it is not mandatory for you to be considered. You are expected to created a webapp that will display the various plots generated during the EDA and also add functionality for a UI that will allow users to enter the information directly onto the webapp so that the developed machine learning model can be used to make predictions on unseen data.
# You have complete creative license to develop the application as you please because we are interested more about how you choose to approach the various challenges one may face during developing such an application. 

# In[1]:


import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt, mpld3
import json


# In[2]:


df = pd.read_csv("titanic.csv")


# In[3]:


df.isna().sum()


# In[4]:


df['Age']= df['Age'].fillna(df['Age'].mean())


# In[5]:


df.dropna(subset=['Embarked'],inplace=True)
df.isna().sum()


# In[6]:


print(df.describe())
print(df.shape)


# In[7]:


print("The number of columns present is as follows",df.columns.value_counts().sum())
print("The columns present in the actual dataset is as follows", df.columns.tolist())
cols = df.columns.tolist()


# In[8]:


print("Visualising the dtypes",df.dtypes)
num_cols = df.select_dtypes([np.int64,np.float64]).columns.tolist()
num_cols.remove('PassengerId')
print(num_cols)


# In[33]:


#Generating Histograms for numeric columns
figs=[]
for col in num_cols:
    fig, ax = plt.subplots()
    df.hist(column=col, ax=ax)
    figs.append(mpld3.fig_to_dict(fig))


# In[38]:


plots={"plots":figs}
print(json.dumps(plots))


# In[11]:


#Studying the correlation of the columns using scatter plots
from pandas.plotting import scatter_matrix

scatter_matrix(df[num_cols],figsize=(50,50))


# In[11]:


obj_cols = df.select_dtypes([np.object]).columns.tolist()
# obj_cols.remove('Name')
# obj_cols.remove('Cabin')
# obj_cols.remove('Ticket')
# print(obj_cols)


# In[12]:


#Plotting categorical data against frequency
for col in obj_cols:
    df[col].value_counts().plot(kind='bar')


# In[13]:


y = pd.Series(df['Survived'])
drop_list = ['Survived','Name','Ticket','Cabin']
X = df.drop(drop_list,axis=1)


# In[14]:


import category_encoders as ce
encoder=ce.OneHotEncoder(handle_unknown='return_nan',return_df=True,use_cat_names=True)
X = encoder.fit_transform(X)
X


# In[15]:


from sklearn.model_selection import train_test_split


# In[16]:


X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,stratify=y,random_state=42)


# In[17]:


from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score


# In[18]:


model = RandomForestClassifier()
model.fit(X_train,y_train)

train_preds = model.predict(X_train)
print("Training scores are as follows")
print("Accuracy Score",accuracy_score(train_preds,y_train))
print("F1 Score",f1_score(train_preds,y_train))
print("ROC AUC Score",roc_auc_score(train_preds,y_train))


test_preds = model.predict(X_test)
print("Testing scores are as follows")
print("Accuracy Score",accuracy_score(test_preds,y_test))
print("F1 Score",f1_score(test_preds,y_test))
print("ROC AUC Score",roc_auc_score(test_preds,y_test))


# In[19]:


import joblib


# In[20]:


joblib.dump(model,"model_joblib")


# In[21]:


#Testing
loaded_model = joblib.load("model_joblib")
array = [5,3,1.0,0.0,35.0,0,0,8.0500,1.0,0.0,0.0] 
#each value represents a feature present in the training set Hint: the users should be able to enter their own values/(or) select from a drop down list of values to make custom predictions
a = np.asarray(array).reshape(1,-1)
predicted_value= loaded_model.predict(a)


# In[22]:


actual_value = y[4]
print("Actual Value",actual_value)
print("Predicted Value",predicted_value)


# In[ ]:




