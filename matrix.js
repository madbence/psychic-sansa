function Matrix(mx)
{
	this.mx=mx;
}
Matrix.prototype={
	'mul': function(m)
	{
		if(this.cols() != m.rows())
		{
			throw new Error('Cannot multipy ('+this.cols()+'x'+m.rows()+').');
		}
		var result=Matrix.zeros(this.rows(), m.cols());
		for(var i=1;i<=this.rows();i++)
		{
			for(var j=1;j<=this.cols();j++)
			{
				var sum=0;
				for(var k=1;k<=m.rows();k++)
				{
					sum+=this.get(k, i)*m.get(j, k);
				}
				result.set(j,i,sum);
			}
		}
		return result;
	},
	'get': function(x, y)
	{
		if(this.mx[y-1] !== undefined && this.mx[y-1][x-1] !== undefined)
		{
			return this.mx[y-1][x-1];
		}
		console.log(this.mx);
		throw new Error('Index ['+x+','+y+'] not exists.');
	},
	'set': function(x, y, v)
	{
		if(this.mx[y-1] !== undefined && this.mx[y-1][x-1] !== undefined)
		{
			return this.mx[y-1][x-1]=v;
		}
		throw new Error('Index ['+x+','+y+'] not exists.');
	},
	'cols': function()
	{
		if(this.mx[0] === undefined)
		{
			throw new Error('...');
		}
		return this.mx[0].length;
	},
	'rows': function()
	{
		return this.mx.length;
	}
}
Matrix.zeros4=function()
{
	return new Matrix([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);
}
Matrix.eyes4=function()
{
	return new Matrix([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);
}
Matrix.zeros=function(y,x)
{
	var rows=[];
	for(var i=0;i<y;i++)
	{
		rows[i]=[];
		for(var j=0;j<x;j++)
		{
			rows[i][j]=0;
		}
	}
	return new Matrix(rows);
}