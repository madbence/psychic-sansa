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
		if(b.sub(a).cross(p.sub(a)).dot(i) < 0)
		{
			return null;
		}
		if(c.sub(b).cross(p.sub(b)).dot(i) < 0)
		{
			return null;
		}
		if(a.sub(c).cross(p.sub(c)).dot(i) < 0)
		{
			return null;
		}
		return p;
	}
}