var tree;

function setup() {
  createCanvas(800, 600);
  tree = new Tree();
  background(0);
}
function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.distance = 2;
  this.x = x;
  this.y = y;
}
Node.prototype.search = function(val) {
  if (this.value == val) 
  {
    stroke(5);
    fill(100);
    ellipse(this.x, this.y, 30, 30);
    noStroke();
    fill(5);
    textAlign(CENTER);
    textSize(20);
    text(this.value, this.x, this.y + 4);
    return this;
  }
  else if (val < this.value && this.left != null) 
  {
    return this.left.search(val);
  }
  else if (val > this.value && this.right != null) 
  {
    return this.right.search(val);
  }

  textAlign(CENTER);
  textSize(30);
  text("No result found", width/2, height/2);
  return null;
}

Node.prototype.visit = function(parent)
{
  if (this.left != null) 
  {
    this.left.visit(this);
  }
  console.log(this.value);
  stroke(500);
  line(parent.x, parent.y, this.x, this.y);
  stroke(255);
  fill(5);
  ellipse(this.x, this.y, 24, 24);
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(12);
  text(this.value, this.x, this.y + 4);
  if (this.right != null) 
  {
    this.right.visit(this);
  }
}

Node.prototype.addNode = function(n) 
{
  if (n.value < this.value) 
  {
    if (this.left == null) 
    {
      this.left = n;
      this.left.x = this.x - (width / pow(2, n.distance));
      this.left.y = this.y + (height / 12);
    } 
    else 
    {
      n.distance++;
      this.left.addNode(n)
    }
  } 
  else if (n.value > this.value) 
  {
    if (this.right == null) 
    {
      this.right = n;
      this.right.x = this.x + (width / pow(2, n.distance));
      this.right.y = this.y + (height / 12);
    } 
    else 
    {
      n.distance++;
      this.right.addNode(n);
    }
  }
}



function Tree() 
{
  this.root = null;
}

Tree.prototype.traverse = function() 
{
  this.root.visit(this.root);
}

Tree.prototype.search = function(val) 
{
  var found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) 
{
  var n = new Node(val);
  if (this.root == null) 
  {
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16;
  } 
  else 
  {
    this.root.addNode(n);
  }
}

function drawnode()
{

     var numm = document.getElementById("numen").value;
     var num=parseInt(numm,10);
     console.log(num);
     tree.addValue(num);
     tree.traverse();
}

function searchnode()
{
  var skey = document.getElementById("search").value;
     var searchkey=parseInt(skey,10);

     var result = tree.search(searchkey);

      stroke(5);
      fill(5);
      ellipse(this.x, this.y, 30, 30)
      stroke(255);
      fill(5);
      ellipse(this.x, this.y, 24, 24);
      noStroke();
      fill(255);
      textAlign(CENTER);
      textSize(12);
      text(this.value, this.x, this.y + 4);
}

     