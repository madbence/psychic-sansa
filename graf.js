window.onload=function()
{
	var ctx=document.getElementById('myCanvas').getContext('2d');
	ctx.translate(250, 250);
	ctx.scale(1, -1);
	var p1=new Vector(0, 0, 0),
		p2=new Vector(50, 0, 0),
		p3=new Vector(0, 0, 50);
	var eye=new Vector(0, -100, 0);
	var a=0;
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  
							window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;  
	var draw=function()
	{
		a+=0.05;
		var t=new Triangle(
			p1.rotateY(a),
			p2.rotateY(a),
			p3.rotateY(a));
		var scr=ctx.createImageData(200, 100);
		for(var i=0;i<100;i++)
		{
			for(var j=0;j<200;j++)
			{
				var p=new Vector(-20+j/5, -80, 10-i/5);
				var l=new Line(eye, p);
				var interSection=t.intersectWithLine(l);
				if(interSection)
				{
					scr.data[(i*200+j)*4]=255;
					scr.data[(i*200+j)*4+3]=255;
				}
				else
				{
					scr.data[(i*200+j)*4]=0;
					scr.data[(i*200+j)*4+3]=255;
				}
			}
		}
		ctx.putImageData(scr, 0, 0);
		requestAnimationFrame(draw);
	}

	requestAnimationFrame(draw);
}
