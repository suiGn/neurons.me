## Histogram Backprojection.
Simple words:  It is used for image segmentation or finding objects of interest in an image.

- What is a Histogram?
According to google define:
his·to·gram
A diagram consisting of rectangles whose area is proportional to the frequency of a variable and whose width is equal to the class interval.

According to openCV Documentation:
- Histograms are collected counts of data organized into a set of predefined bins.
- The data collected can be whatever feature you find useful to describe your image.
An histogram can keep count not only of color intensities, but of whatever image features that we want to measure (i.e. gradients, directions, etc).

Sg++ome parts of the histogram:
- dims: The number of parameters you want to collect data of. In our example, dims = 1 because we are only counting the intensity values of each pixel (in a greyscale image).
- bins: It is the number of subdivisions in each dim. In our example, bins = 16
- range: The limits for the values to be measured. In this case: range = [0,255]


Other definition:
A histogram is a display of statistical information that uses rectangles to show the frequency of data items in successive numerical intervals of equal size. In the most common form of histogram, the independent variable is plotted along the horizontal axis and the dependent variable is plotted along the vertical axis.


## How do we do it ? 
We create a histogram of an image containing our object of interest.
The object should fill the image as far as possible for better results. And a color histogram is preferred over grayscale histogram, because color of the object is a better way to define the object than its grayscale intensity. We then "back-project" this histogram over our test image where we need to find the object, ie in other words, we calculate the probability of every pixel belonging to the ground and show it.
