# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 11:26:28 2024

@author: mrkool33
"""

from sklearn import datasets
import pandas as pd 
import sklearn.model_selection as skms

df=datasets.load_iris()
#if the data is csv 
#df= pd.read_csv('fileNmae')

# for (1 KNN) and (3 naive)
(df_train_ft ,df_test_ft ,df_train_tg ,df_test_tg)=skms.train_test_split(df.data,df.target,test_size=0.25)

#****************************************************************
#   1
#   KNN
from sklearn.neighbors import KNeighborsClassifier
knn=KNeighborsClassifier(n_neighbors=3)
fit=knn.fit(df_train_ft,df_train_tg)
prect=fit.predict(df_test_ft)

from sklearn.metrics import accuracy_score
accuracy=accuracy_score(df_test_tg,prect)
print(f'accuracy: {accuracy}')

from sklearn.metrics import confusion_matrix
matrix=confusion_matrix(df_test_tg, prect)

import seaborn as sn
sn.heatmap(matrix,annot=True)
#*****************************************************************

#/////////////////////////////////////////////////////////////////
#   2
#   tree

from sklearn import tree
tdf=tree.DecisionTreeClassifier()
tdf.fit(df.data, df.target)

from sklearn.model_selection import cross_val_score
score=cross_val_score(tdf,df.data,df.target,cv=3,scoring='accuracy')
print(f'tree score: {score}')

import matplotlib.pyplot as plt

plt.figure(figsize=(15,10))
tree.plot_tree(tdf, filled=True, feature_names=df.feature_names,class_names=['setosa','versicolor','virginica'])
plt.show()

#/////////////////////////////////////////////////////////////////

#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
#  3 
#  naive
from sklearn.naive_bayes import GaussianNB
nb=GaussianNB()
fit=nb.fit(df_train_ft,df_train_tg)
predet=fit.predict(df_test_ft)
print(f'naive accuricy: {accuracy}')

from sklearn.metrics import confusion_matrix
naivematrix=confusion_matrix(df_test_tg,predet)

import seaborn as sn
sn.heatmap(naivematrix,annot=True)
plt.show()
#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
