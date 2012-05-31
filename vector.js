function Vector(x,y,z)
{
	this.x=x;
	this.y=y;
	this.z=z;
}
Vector.prototype={
	'add': function(v)
	{
		return new Vector(this.x+v.x, this.y+v.y, this.z+v.z);
	},
	sub: function(v)
	{
		return new Vector(this.x-v.x, this.y-v.y, this.z-v.z);
	},
	'scale': function(d)
	{
		return new Vector(this.x*d, this.y*d, this.z*d);
	},
	'dot': function(v)
	{
		return this.x*v.x+this.y*v.y+this.z*v.z;
	},
	'length': function()
	{
		return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
	},
	'cross': function(v)
	{
		return new Vector(
			this.y*v.z-this.z*v.y,
			this.z*v.x-this.x*v.z,
			this.x*v.y-this.y*v.x);
	},
	'rotateX': function(a)
	{
		var rot=new Matrix([
			[1, 0, 0, 0],
			[0, Math.cos(a), -Math.sin(a), 0],
			[0, Math.sin(a), Math.cos(a), 0],
			[0, 0, 0, 1]]);
		var vec=new Matrix([[this.x, this.y, this.z, 1]]);
		var res=vec.mul(rot);
		for(var i=1;i<4;i++)
		{
			res.set(i, 1, res.get(i, 1)/res.get(4, 1));
		}
		return new Vector(res.get(1, 1), res.get(2, 1), res.get(3, 1));
	},
	'rotateY': function(a)
	{
		var rot=new Matrix([
			[Math.cos(a), 0, Math.sin(a), 0],
			[0, 1, 0, 0],
			[-Math.sin(a), 0, Math.cos(a), 0],
			[0, 0, 0, 1]]);
		var vec=new Matrix([[this.x, this.y, this.z, 1]]);
		var res=vec.mul(rot);
		for(var i=1;i<4;i++)
		{
			res.set(i, 1, res.get(i, 1)/res.get(4, 1));
		}
		return new Vector(res.get(1, 1), res.get(2, 1), res.get(3, 1));
	},
	'rotateZ': function(a)
	{
		var rot=new Matrix([
			[Math.cos(a), -Math.sin(a), 0, 0],
			[Math.sin(a), Math.cos(a), 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]]);
		var vec=new Matrix([[this.x, this.y, this.z, 1]]);
		var res=vec.mul(rot);
		for(var i=1;i<4;i++)
		{
			res.set(i, 1, res.get(i, 1)/res.get(4, 1));
		}
		return new Vector(res.get(1, 1), res.get(2, 1), res.get(3, 1));
	}
}