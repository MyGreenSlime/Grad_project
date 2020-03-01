import sys
import os
import tensorflow as tf
from PrepareData import *
model_density = tf.keras.models.load_model('./python/density_model')
model_mi = tf.keras.models.load_model('./python/mi_model')

inp = [readData("./uploads/"+sys.argv[1])]
collection =  getXterm_Yterm(inp)
input_yterm = getYtermTable(collection)
input_xterm = getXtermTable(collection)
# print("finish")
print([model_density.predict(input_yterm)[0][0], model_mi.predict(input_xterm)[0][0]])