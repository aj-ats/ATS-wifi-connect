import React, { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>count: {count}</p>
			<button onClick={() => setCount(count + 1)}>increment</button>
			<button onClick={() => setCount(count - 1)}>d</button>
		</div>
	);
}

export default Counter;
