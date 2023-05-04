var img=null;
var imgGray=null;
var imgRed=null;
var imgRb=null;
var cv=null;
var file=null;


function upload(){
cv=document.getElementById("myCanvas");
file=document.getElementById("imgFile");
img=new SimpleImage(file);

 img.drawTo(cv);
}

function doGray(){

 imgGray=new SimpleImage(img);
 if(isImageLoad(imgGray)){
     for(var pixel of imgGray.values()){
    var avg=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
    pixel.setGreen(avg);
    pixel.setRed(avg);
    pixel.setBlue(avg);
  }
   imgGray.drawTo(cv);
  
 }
  else{
        alert('Image not loaded...');
        return;
  }
}

function doRed(){
    imgRed=new SimpleImage(img);
 if(isImageLoad(imgRed)){
     for(var pixel of imgRed.values()){
      var avg=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
   
         pixel.setGreen(avg/2);
         pixel.setRed(avg*2);
         pixel.setBlue(avg/2);
  
  }
    imgRed.drawTo(cv);
 }
  else{
        alert('Image not loaded...');
        return;
  }
}

function doRB(){

  imgRb=new SimpleImage(img);
  if(isImageLoad(imgRb)){
      for(var pixel of imgRb.values()){
        var x=pixel.getX();
        var y=pixel.getY();
        var rbTemp=imgRb.getHeight()/7;
        var avg=(pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
        if(y<rbTemp){

          if(avg<128){

            pixel.setRed(avg*2);
            pixel.setGreen(0);
            pixel.setBlue(0);
            imgRb.setPixel(x,y,pixel);

          }
          else{

            pixel.setRed(255);
            pixel.setGreen(avg*2-255);
            pixel.setBlue(avg*2-255);
            imgRb.setPixel(x,y,pixel);

          }
          
        }
        if(y>=rbTemp && y<rbTemp*2)
          {
            if(avg<128){

              pixel.setRed(avg*2);
              pixel.setGreen(avg*0.8);
              pixel.setBlue(0);
              imgRb.setPixel(x,y,pixel);

            }
            else{

              pixel.setRed(255);
              pixel.setGreen(1.2*avg-51);
              pixel.setBlue(2*avg-255);
              imgRb.setPixel(x,y,pixel);
              
            }
            
          }
        if(y>=rbTemp*2 && y<rbTemp*3)
          {
            if(avg<128){

              pixel.setRed(avg*2);
              pixel.setGreen(avg*2);
              pixel.setBlue(0);
              imgRb.setPixel(x,y,pixel);

            }
            else{
              
              pixel.setRed(255);
              pixel.setGreen(255);
              pixel.setBlue(2*avg-255);
              imgRb.setPixel(x,y,pixel);
            }
            
          }
        if(y>=rbTemp*3 && y<rbTemp*4)
          {
            if(avg<128){

              pixel.setRed(0);
              pixel.setGreen(avg*2);
              pixel.setBlue(0);
              imgRb.setPixel(x,y,pixel);

            }
            else{

              pixel.setRed(avg*2-255);
              pixel.setGreen(255);
              pixel.setBlue(avg*2-255);
              imgRb.setPixel(x,y,pixel);
              
            }
            
          }
        if(y>=rbTemp*4 && y<rbTemp*5)
          {
            if(avg<128){

              pixel.setRed(0);
              pixel.setGreen(0);
              pixel.setBlue(avg*2);
              imgRb.setPixel(x,y,pixel);

            }
            else{

              pixel.setRed(avg*2-255);
              pixel.setGreen(avg*2-255);
              pixel.setBlue(255);
              imgRb.setPixel(x,y,pixel);
              
            }
            
          }
        if(y>=rbTemp*5 && y<rbTemp*6)
          {
            if(avg<128){

              pixel.setRed(0.8*avg);
              pixel.setGreen(0);
              pixel.setBlue(avg*2);
              imgRb.setPixel(x,y,pixel);

            }
            else{

              pixel.setRed(1.2*avg-51);
              pixel.setGreen(avg*2-255);
              pixel.setBlue(255);
              imgRb.setPixel(x,y,pixel);
              
            }
            
          }
          if(y>=rbTemp*6 && y<imgRb.getHeight()){
            if(avg<128){

              pixel.setRed(1.6*avg);
              pixel.setGreen(0);
              pixel.setBlue(1.6*avg);
              imgRb.setPixel(x,y,pixel);

            }
            else{

              pixel.setRed(0.4*avg+153);
              pixel.setGreen(2*avg-255);
              pixel.setBlue(0.4*avg+153);
              imgRb.setPixel(x,y,pixel);
              
            }
          }
      }
      imgRb.drawTo(cv);
      }
  else{
        alert('Image not loaded...');
        return;
  }
  
 
}

function doReset(){
  if(isImageLoad(img)){
      img.drawTo(cv);
      imgGray=img;
      imgRed=img;
      imgBW=img;
  }
  else{
    alert('Image not loaded...');
    return;
  }
}

function isImageLoad(curImg){
  if(curImg==null || !curImg.complete()){
    return false;
  }
  else{
    return true;
  }
}


