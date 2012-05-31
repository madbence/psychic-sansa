function Triangle(a,b,c)
{
	this.a=a;
	this.b=b;
	this.c=c;
}

Triangle.prototype={
	'intersectWithLine': function(line)
	{
		var a=this.a,b=this.b,c=this.c
		var n=b.sub(a).cross(c.sub(a));
		var l0=line.a;
		var v=line.getDirection();
		var t=(n.x*l0.x-n.x*a.x+n.y*l0.y-n.y*a.y+n.z*l0.z-n.z*a.z)/(-n.x*v.x-n.y*v.y-n.z*v.z);
		var p=l0.add(v.scale(t));
		var i=b.sub(a).cross(c.sub(a));
		var d=b.sub(a).cross(p.sub(a)).dot(i);
		var dd=null;
		if(d < 0)
		{
			return null;
		}
		else
		{
			if(dd === null || dd>d)
			{
				dd=d;
			}
		}
		d=c.sub(b).cross(p.sub(b)).dot(i);
		if(d < 0)
		{
			return null;
		}
		else
		{
			if(dd === null || dd>d)
			{
				dd=d;
			}
		}
		d=a.sub(c).cross(p.sub(c)).dot(i);
		if(d < 0)
		{
			return null;
		}
		else
		{
			if(dd === null || dd>d)
			{
				dd=d;
			}
		}
		if(dd<500000)
		{
			return p;
		}
		return null;
	}
}