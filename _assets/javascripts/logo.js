var logo = function( sketch ) {
  var soundText = "SOUND".split('');
  var leaksText = "LEAKS".split('').join("   ");

  var i;
  var theta = 0.0;      // Start angle at 0


  sketch.setup = function() {
    sketch.createCanvas(300, 200);
  };

  sketch.draw = function() {
    sketch.strokeWeight(2);

    sketch.textFont("Helvetica");
    sketch.textSize(14);
    sketch.textStyle(sketch.BOLD);

    sketch.background(230, 230, 230);
    theta += 0.04;

    var width = sketch.width;
    var height = sketch.height;

    var angle1 = sketch.radians(15);
    var angle2 = sketch.radians(40);

    var w1 = 0.45*width
    var h1 = 0.37*height;
    var offset1 = h1*sketch.tan(angle1);

    var h2 = 0.25*width;
    var w2 = w1;
    var offset2 = h2*sketch.tan(angle2);

    sketch.fill(180);

    sketch.push();
      sketch.translate(0.2*width, 0.6*height);

      // sound text
      sketch.push();
        sketch.strokeWeight(0.5);
        soundText.map(function(char, index){
          var x = -15;
          var y = -0.22*width + 15 *index;
          sketch.text(char, x, y);
        });
      sketch.pop();

      //  leaks text
      sketch.push();
        sketch.strokeWeight(1);
        sketch.rotate(angle2);
        sketch.translate(0, 15);
        sketch.textWidth(40);
        sketch.text(leaksText, 0, 0)
      sketch.pop();

      sketch.push();
        sketch.translate(0.12*width, -0.18*height);
        sketch.rotate(sketch.radians(10));

        var x = theta;
        for (i = 0; i <= 90; i=i+0.3) {
          var y = -sketch.sin(x+sketch.PI/2)*height/4.5;
          sketch.ellipse(i, y, 0.2, 0.2);
          x += 0.03;
        }

      sketch.pop();

      sketch.push();
        sketch.rotate(-angle1);
        sketch.beginShape(sketch.POINTS);
          sketch.vertex(0, 0);
          sketch.vertex(offset1, -h1);
          sketch.vertex(offset1+w1, -h1);
          sketch.vertex(w1, 0);
          sketch.vertex(offset2 + w2, h2);
          sketch.vertex(offset2, h2);
          sketch.vertex(0, 0);
        sketch.endShape();
      sketch.pop();
    sketch.pop();

  };
};

var myp5 = new p5(logo, 'logo');