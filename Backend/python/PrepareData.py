import pandas as pd
import numpy as np

header = []
temp = 2
for i in range(61):
    header.append(temp)
    temp = round(temp+0.1,1)
index = []
for i in range(30, 121):
    index.append(i)

def readData(file):
    tempDf = pd.read_csv(file, names=header)
    tempDf['index'] = index
    tempDf.set_index(keys = 'index', inplace=True)
    return tempDf
def getMaxZValuePosition(inp):
    new_dict = {}
    new_dict['value'] = 0
    new_dict['logMW'] = 0
    new_dict['TE'] = 0
    for i in header:
        for j in index:
            if(new_dict['value'] <= inp[i][j]):
                new_dict['value'] = inp[i][j]
                new_dict['LogMW'] = i
                new_dict['TE'] = j
    return new_dict
def getXterm_Yterm(inputs):
    Collection = []
    for single in inputs:
        temp_dict = {}
        temp_dict['xterm'] = []
        temp_dict['yterm'] = []
        position = getMaxZValuePosition(single) 
        #logMW = X, TE = Y
        for i in header:
            tempMax = 0
            if(single[i][position['TE']] > tempMax):
                tempMax = single[i][position['TE']]
            temp_dict['xterm'].append(tempMax)
            
        for i in index:
            tempMax = 0
            if(single[position['LogMW']][i] > tempMax):
                tempMax = single[position['LogMW']][i]
            temp_dict['yterm'].append(tempMax)
        Collection.append(temp_dict)
    return Collection
def getYtermTable(collection):
    newYtermCollection = []
    for coll in collection:
        newDict = {}
        for i, value in enumerate(coll['yterm'][3:67]):
            newDict[i] = value
        newYtermCollection.append(newDict)
    yTermTable = pd.DataFrame(newYtermCollection)   
    return yTermTable
def getXtermTable(collection):
    newXtermCollection = []
    for coll in collection:
        newDict = {}
        for i, value in enumerate(coll['xterm'][16:45]):
            newDict[i] = value
        newXtermCollection.append(newDict)
    xTermTable = pd.DataFrame(newXtermCollection)   
    return xTermTable


