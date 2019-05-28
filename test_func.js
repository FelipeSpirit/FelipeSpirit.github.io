function calculateEvacuation(diameter, holeDiameter, height) {
		return Math.pow(((diameter / 100) / (holeDiameter / 100)), 2)
				* Math.sqrt(2 * (height / 100) / 9.8);
	}
