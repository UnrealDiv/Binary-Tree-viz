let my;
let trees = [];
let circles = [];

function setup() {
  createCanvas(1500, 1500);
  my = new BST();
  my.insert(25);
  my.insert(15);
  my.insert(50);
  my.insert(30);
  my.insert(10);
  // my.insert(40);
  // my.insert(45);
  // my.insert(12);
  // my.insert(49);
  // my.insert(80);
  // my.insert(42);
  // my.insert(44);
  // my.insert(8);
  // my.insert(35);
  // my.insert(9);
  // my.insert(7);
  // trees[0] = my;

}
// const c1 = new Circle("25");
class Node {
  constructor(val){
    this.left = null;
    this.val = val;
    this.right = null;
  }
}
class BST{
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    let vector = createVector(width/2,height/4);
    let left_vector = vector ;
    let right_vector = vector;
    // console.log(left_vector,right_vector);
    
    
    if(!this.root){
      this.root = newNode;
    
      // console.log(vector,"for root");
      let circle = new Circle(newNode.val,vector,vector.x,vector.y);
      circles.push(circle);
    }else{
      let currentNode = this.root;
      let parentX;
      let parentY;
      // console.log(parent,'first');
      while(true){
      if(currentNode.val > val){

        // parent.x = left_vector.x;
        parentY = left_vector.y;
        parentX = left_vector.x;
       console.log(left_vector,'before');
        left_vector.x -= 200;
        left_vector.y += 100;
        console.log(left_vector.x,parent.x,'after');
       
        
        if(!currentNode.left){
          currentNode.left = newNode;
          let left_circle = new Circle(newNode.val,left_vector,parentX,parentY);
          circles.push(left_circle);
          return this;
        }
        currentNode = currentNode.left; 
      }
      else{
        if(currentNode.val <val){
          parentY = left_vector.y;
        parentX = left_vector.x;
          right_vector.x +=200;
          right_vector.y +=100;
          if(!currentNode.right){
            currentNode.right = newNode;
     
            // console.log(right_vector,"right");
            let right_circle = new Circle(newNode.val,right_vector,parentX,parentY);
            circles.push(right_circle);
            return this;
          }
          currentNode = currentNode.right; 
      }
    }
  }
  }
  console.log(circles);
}}

// console.log(my);


// console.log(my);

class Circle{
  constructor(val,vector,px,py){
    this.x = vector.x;
    this.y = vector.y;
    this.radius = 80;
    this.value = val.toString();
    this.px =px;
    
    this.py = py;
    console.log(this.px-this.x);
  }
  show(){
    stroke(255);
    line(this.px,this.py,this.x,this.y);
    push();
    fill(255,0,0);
    ellipse(this.x,this.y,this.radius,this.radius);
    pop();
    textSize(32);
    text(this.value,this.x-20,this.y+10);
  
    // line(this.x-200,this.y+100,this.x,this.y);
  }
  // left_add(){
  //   fill(255,0,0);
  //   ellipse(this.x-200,this.y+200,this.radius,this.radius);
  //   textSize(32);
  //   fill(255);
  //   text(this.value,this.x-200-20,this.y+200+10);
  // }
  // right_add(){
  //   fill(255,0,0);
  //   ellipse(this.x+200,this.y+200,this.radius,this.radius);
  //   textSize(32);
  //   fill(255);
  //   text(this.value,this.x+200-20,this.y+200+10);
  // }
}



function draw() {
  background(0);
  for(let i=0;i<circles.length;i++){
    circles[i].show();
  }

 
}
