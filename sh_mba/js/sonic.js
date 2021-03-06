/*
 * Sonic 0.1
 * --
 * https://github.com/jamespadolsey/Sonic
 * --
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */ 

(function(){

	var emptyFn = function(){};
	

	function Sonic(container) {

		var dArray = [
		{
	
			width: 100,
			height: 50,
			padding: 10,
	
			stepsPerFrame: 2,
			trailLength: 1,
			pointDistance: .03,
	
			strokeColor: '#FF7B24',
			
			step: 'fader',
	
			multiplier: 2,
	
			setup: function() {
				this._.lineWidth = 5;
			},
	
			path: [	
				['arc', 10, 10, 10, -270, -90],
				['bezier', 10, 0, 40, 20, 20, 0, 30, 20],
				['arc', 40, 10, 10, 90, -90],
				['bezier', 40, 0, 10, 20, 30, 0, 20, 20]
			]
		},
		
		{
	
			width: 30,
			height: 30,
	
			stepsPerFrame: 2,
			trailLength: .3,
			pointDistance: .1,
			padding: 10,
	
			fillColor: '#D4FF00',
			strokeColor: '#FFF',
	
			setup: function() {
				this._.lineWidth = 20;
			},
	
			path: [
				['line', 0, 0, 30, 0],
				['line', 30, 0, 30, 30],
				['line', 30, 30, 0, 30],
				['line', 0, 30, 0, 0]
			]
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 1,
			trailLength: 1,
			pointDistance: .025,
	
			strokeColor: '#05E2FF',
	
			fps: 20,
	
			setup: function() {
				this._.lineWidth = 2;
			},
			step: function(point, index) {
	
				var cx = this.padding + 50,
					cy = this.padding + 50,
					_ = this._,
					angle = (Math.PI/180) * (point.progress * 360);
	
				this._.globalAlpha = Math.max(.5, this.alpha);
	
				_.beginPath();
				_.moveTo(point.x, point.y);
				_.lineTo(
					(Math.cos(angle) * 35) + cx,
					(Math.sin(angle) * 35) + cy
				);
				_.closePath();
				_.stroke();
	
				_.beginPath();
				_.moveTo(
					(Math.cos(-angle) * 32) + cx,
					(Math.sin(-angle) * 32) + cy
				);
				_.lineTo(
					(Math.cos(-angle) * 27) + cx,
					(Math.sin(-angle) * 27) + cy
				);
				_.closePath();
				_.stroke();
	
			},
			path: [
				['arc', 50, 50, 40, 0, 360]
			]
		},
	
		{
	
			width: 100,
			height: 50,
	
			stepsPerFrame: 1,
			trailLength: 1,
			pointDistance: .1,
			fps: 15,
			padding: 10,
			//step: 'fader',
	
			fillColor: '#FF2E82',
	
			setup: function() {
				this._.lineWidth = 20;
			},
	
			path: [
				['line', 0, 20, 100, 20],
				['line', 100, 20, 0, 20]
			]
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 7,
			trailLength: .7,
			pointDistance: .01,
			fps: 30,
	
			setup: function() {
				this._.lineWidth = 10;
			},
	
			path: [
				['line', 20, 70, 50, 20],
				['line', 50, 20, 80, 70],
				['line', 80, 70, 20, 70]
			]
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 4,
			trailLength: 1,
			pointDistance: .01,
			fps: 25,
	
			fillColor: '#FF7B24',
	
			setup: function() {
				this._.lineWidth = 10;
			},
	
			step: function(point, i, f) {
	
				var progress = point.progress,
					degAngle = 360 * progress,
					angle = Math.PI/180 * degAngle,
					angleB = Math.PI/180 * (degAngle - 180),
					size = i*5;
	
				this._.fillRect(
					Math.cos(angle) * 25 + (50-size/2),
					Math.sin(angle) * 15 + (50-size/2),
					size,
					size
				);
	
				this._.fillStyle = '#63D3FF';
	
				this._.fillRect(
					Math.cos(angleB) * 15 + (50-size/2),
					Math.sin(angleB) * 25 + (50-size/2),
					size,
					size
				);
	
				if (point.progress == 1) {
	
					this._.globalAlpha = f < .5 ? 1-f : f;
	
					this._.fillStyle = '#EEE';
	
					this._.beginPath();
					this._.arc(50, 50, 5, 0, 360, 0);
					this._.closePath();
					this._.fill();
	
				}
	
	
			},
	
			path: [
				['line', 40, 10, 60, 90]
			]
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 3,
			trailLength: 1,
			pointDistance: .01,
			fps: 30,
			step: 'fader',
	
			strokeColor: '#D4FF00',
	
			setup: function() {
				this._.lineWidth = 6;
			},
	
			path: [
				['arc', 50, 50, 20, 360, 0]
			]
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 1,
			trailLength: 1,
			pointDistance: .02,
			fps: 30,
	
			fillColor: '#FF7B24'/*'#05E2FF'*/,
	
			step: function(point, index) {
				
				this._.beginPath();
				this._.moveTo(point.x, point.y);
				this._.arc(point.x, point.y, index * 7, 0, Math.PI*2, false);
				this._.closePath();
				this._.fill();
	
			},
	
			path: [
				['arc', 50, 50, 30, 0, 360]
			]
	
		},
	
		{
	
			width: 100,
			height: 100,
	
			stepsPerFrame: 1,
			trailLength: 1,
			pointDistance: .05,
	
			strokeColor: '#FF2E82',
	
			fps: 20,
	
			setup: function() {
				this._.lineWidth = 4;
			},
			step: function(point, index) {
	
				var cx = this.padding + 50,
					cy = this.padding + 50,
					_ = this._,
					angle = (Math.PI/180) * (point.progress * 360),
					innerRadius = index === 1 ? 10 : 25;
	
				_.beginPath();
				_.moveTo(point.x, point.y);
				_.lineTo(
					(Math.cos(angle) * innerRadius) + cx,
					(Math.sin(angle) * innerRadius) + cy
				);
				_.closePath();
				_.stroke();
	
			},
			path: [
				['arc', 50, 50, 40, 0, 360]
			]
		}

		];
		
		var d = dArray[7];
		
		this.data = d.path || d.data;
		this.imageData = [];

		this.multiplier = d.multiplier || 1;
		this.padding = d.padding || 0;

		this.fps = d.fps || 25;

		this.stepsPerFrame = ~~d.stepsPerFrame || 1;
		this.trailLength = d.trailLength || 1;
		this.pointDistance = d.pointDistance || .05;

		this.domClass = d.domClass || 'sonic';

		this.fillColor = d.fillColor || '#FFF';
		this.strokeColor = d.strokeColor || '#FFF';

		this.stepMethod = typeof d.step == 'string' ?
			stepMethods[d.step] :
			d.step || stepMethods.square;

		this._setup = d.setup || emptyFn;
		this._teardown = d.teardown || emptyFn;
		this._preStep = d.preStep || emptyFn;

		this.width = d.width;
		this.height = d.height;

		this.fullWidth = this.width + 2*this.padding;
		this.fullHeight = this.height + 2*this.padding;

		this.domClass = d.domClass || 'sonic';

		this.containerDiv = document.getElementById(container);
		
		this.enabled = this.setup();

		if (!this.enabled) return null;
	}

	var argTypes = Sonic.argTypes = {
		DIM: 1,
		DEGREE: 2,
		RADIUS: 3,
		OTHER: 0
	};

	var argSignatures = Sonic.argSignatures = {
		arc: [1, 1, 3, 2, 2, 0],
		bezier: [1, 1, 1, 1, 1, 1, 1, 1],
		line: [1,1,1,1]
	};

	var pathMethods = Sonic.pathMethods = {
		bezier: function(t, p0x, p0y, p1x, p1y, c0x, c0y, c1x, c1y) {
			
		    t = 1-t;

		    var i = 1-t,
		        x = t*t,
		        y = i*i,
		        a = x*t,
		        b = 3 * x * i,
		        c = 3 * t * y,
		        d = y * i;

		    return [
		        a * p0x + b * c0x + c * c1x + d * p1x,
		        a * p0y + b * c0y + c * c1y + d * p1y
		    ]

		},
		arc: function(t, cx, cy, radius, start, end) {

		    var point = (end - start) * t + start;

		    var ret = [
		        (Math.cos(point) * radius) + cx,
		        (Math.sin(point) * radius) + cy
		    ];

		    ret.angle = point;
		    ret.t = t;

		    return ret;

		},
		line: function(t, sx, sy, ex, ey) {
			return [
				(ex - sx) * t + sx,
				(ey - sy) * t + sy
			]
		}
	};

	var stepMethods = Sonic.stepMethods = {
		
		square: function(point, i, f, color, alpha) {
			this._.fillRect(point.x - 3, point.y - 3, 6, 6);
		},

		fader: function(point, i, f, color, alpha) {

			this._.beginPath();

			if (this._last) {
				this._.moveTo(this._last.x, this._last.y);
			}

			this._.lineTo(point.x, point.y);
			this._.closePath();
			this._.stroke();

			this._last = point;

		}

	}

	Sonic.prototype = {
		setup: function() {

			var args,
				type,
				method,
				value,
				data = this.data;

			this.canvas = document.createElement('canvas');
			
			/* not canvas element ? */
			if (!this.canvas || !this.canvas.getContext) return false;
			
			this._ = this.canvas.getContext('2d');

			this.canvas.className = this.domClass;

			this.canvas.height = this.fullHeight;
			this.canvas.width = this.fullWidth;

			this.points = [];

			for (var i = -1, l = data.length; ++i < l;) {

				args = data[i].slice(1);
				method = data[i][0];

				if (method in argSignatures) for (var a = -1, al = args.length; ++a < al;) {

					type = argSignatures[method][a];
					value = args[a];

					switch (type) {
						case argTypes.RADIUS:
							value *= this.multiplier;
							break;
						case argTypes.DIM:
							value *= this.multiplier;
							value += this.padding;
							break;
						case argTypes.DEGREE:
							value *= Math.PI/180;
							break;
					};

					args[a] = value;

				}

				args.unshift(0);

				for (var r, pd = this.pointDistance, t = pd; t <= 1; t += pd) {
					
					// Avoid crap like 0.15000000000000002
					t = Math.round(t*1/pd) / (1/pd);

					args[0] = t;

					r = pathMethods[method].apply(null, args);

					this.points.push({
						x: r[0],
						y: r[1],
						progress: t
					});

				}

			}

			this.frame = 0;
			//this.prep(this.frame);

			/* init parent div */
			this.divLoading = document.createElement("div");
			this.divLoading.appendChild(this.canvas);
			
			/* container */
			this.containerDiv.appendChild(this.divLoading);
			
			return true;
		},

		prep: function(frame) {

			if (frame in this.imageData) {
				return;
			}

			this._.clearRect(0, 0, this.fullWidth, this.fullHeight);
			
			var points = this.points,
				pointsLength = points.length,
				pd = this.pointDistance,
				point,
				index,
				frameD;

			this._setup();

			for (var i = -1, l = pointsLength*this.trailLength; ++i < l && !this.stopped;) {

				index = frame + i;

				point = points[index] || points[index - pointsLength];

				if (!point) continue;

				this.alpha = Math.round(1000*(i/(l-1)))/1000;

				this._.globalAlpha = this.alpha;

				this._.fillStyle = this.fillColor;
				this._.strokeStyle = this.strokeColor;

				frameD = frame/(this.points.length-1);
				indexD = i/(l-1);

				this._preStep(point, indexD, frameD);
				this.stepMethod(point, indexD, frameD);

			} 

			this._teardown();

			this.imageData[frame] = (
				this._.getImageData(0, 0, this.fullWidth, this.fullWidth)
			);

			return true;

		},

		draw: function() {
			
			if (!this.prep(this.frame)) {

				this._.clearRect(0, 0, this.fullWidth, this.fullWidth);

				this._.putImageData(
					this.imageData[this.frame],
					0, 0
				);

			}

			this.iterateFrame();

		},

		iterateFrame: function() {
			
			this.frame += this.stepsPerFrame;

			if (this.frame >= this.points.length) {
				this.frame = 0;
			}

		},

		play: function() {

			if (!this.enabled) return;
			
			this.stopped = false;

			var hoc = this;

			this.timer = setInterval(function(){
				hoc.draw();
			}, 1000 / this.fps);

			this.containerDiv.style.display = "block";
		},
		stop: function() {

			if (!this.enabled) return;
			
			this.stopped = true;
			this.timer && clearInterval(this.timer);
			
			this.containerDiv.style.display = "none";
		}
	};

	window.Sonic = Sonic;
	
}());
