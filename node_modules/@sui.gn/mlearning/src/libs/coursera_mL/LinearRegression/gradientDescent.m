function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENT DESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESCENT(X, y, theta, alpha, num_iters) updates theta by 
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters
	% theta values via batch gradient descent.
		   
		    t1 = theta(1) - alpha * (1 / m) * sum(((X * theta) - y) .* X(:, 1));
		    t2 = theta(2) - alpha * (1 / m) * sum(((X * theta) - y) .* X(:, 2));

		    % Feed our new theta values before computing cost.
			% Not done inline 
		    theta(1) = t1;
		    theta(2) = t2;

    % Save the cost J in every iteration    
    J_history(iter) = computeCost(X, y, theta);

end

end
