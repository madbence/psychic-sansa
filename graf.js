window.onload=function()
{
	var ctx=document.getElementById('myCanvas').getContext('2d');
	ctx.translate(250, 250);
	ctx.scale(1, -1);
	var points=[
		[new Vector(0, 0, 0), new Vector(50, 0, 0), new Vector(0, 0, 50)],		//1/1
		[new Vector(50, 0, 50), new Vector(50, 0, 0), new Vector(0, 0, 50)],	//1/2
		[new Vector(0, 50, 0), new Vector(50, 50, 0), new Vector(0, 50, 50)],		//6/1
		[new Vector(50, 50, 50), new Vector(50, 50, 0), new Vector(0, 50, 50)],	//6/2
		[new Vector(0, 0, 0), new Vector(0, 50, 0), new Vector(0, 0, 50)],		//5/1
		[new Vector(0, 50, 50), new Vector(0, 50, 0), new Vector(0, 0, 50)],	//5/2
		[new Vector(50, 0, 0), new Vector(50, 50, 0), new Vector(50, 0, 50)],		//2/1
		[new Vector(50, 50, 50), new Vector(50, 50, 0), new Vector(50, 0, 50)],	//2/2
		[new Vector(0, 0, 0), new Vector(50, 0, 0), new Vector(0, 50, 0)],		//4/1
		[new Vector(50, 50, 0), new Vector(50, 0, 0), new Vector(0, 50, 0)],	//4/2
		[new Vector(0, 0, 50), new Vector(50, 0, 50), new Vector(0, 50, 50)],		//3/1
		[new Vector(50, 50, 50), new Vector(50, 0, 50), new Vector(0, 50, 50)],	//3/2
		];
	var eye=new Vector(0, -100, -5);
	var a=0;
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  
							window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;  
	var draw=function()
	{
		a+=0.05;
		var triangles=[];
		for(var i in points)
		{
			var p=points[i];
			triangles.push(new Triangle(p[0].rotateZ(a), p[1].rotateZ(a), p[2].rotateZ(a)));
		}
		var scr=ctx.createImageData(200, 100);
		for(var i=0;i<100;i++)
		{
			for(var j=0;j<200;j++)
			{
				var p=new Vector(-20+j/5, -90, 10-i/5);
				for(var k in triangles)
				{
					var t=triangles[k];
					var l=new Line(eye, p);
					var interSection=t.intersectWithLine(l);
					if(interSection)
					{
						scr.data[(i*200+j)*4]=255;
						scr.data[(i*200+j)*4+3]=255;
					}
					else
					{
						//scr.data[(i*200+j)*4]=0;
						//scr.data[(i*200+j)*4+3]=255;
					}
				}
			}
		}
		ctx.putImageData(scr, 0, 0);
		requestAnimationFrame(draw);
	}

	requestAnimationFrame(draw);
}
