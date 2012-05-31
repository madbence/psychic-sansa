function LineSegment(a, b)
{
	this.a=a;
	this.b=b;
}

LineSegment.prototype={
	'draw': function(ctx)
	{
		ctx.beginPath();
		ctx.moveTo(this.a.x, this.a.y);
		ctx.lineTo(this.b.x, this.b.y);
		ctx.stroke();
	}
}

function Line(a, b)
{
	this.a=a;
	this.b=b;
}

Line.prototype={
	'getDirection': function()
	{
		return this.b.sub(this.a);
	}
}