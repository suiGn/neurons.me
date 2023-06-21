function J = computeCost(X, y, theta)
	
%COMPUTECOST Compute cost for linear regression
%parameter for linear regression to fit the data points in X and y
	
m = length(y); % number of training examples
%Compute the cost of a particular choice of theta

	costs = (X * theta - y) .^ 2;
	J = sum(costs) / (2 * m); %You should set J to the cost.

end
