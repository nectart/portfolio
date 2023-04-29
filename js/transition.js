



      function start() {
         //preload next image
         console.log('start');
      }

      function middle() {
         //exchange content
         console.log('middle');
      }

      function end() {
         //end callback
         console.log('end');
      }


      var pixelwave = new PixelWave({
         canvasTop: 0, //for a header
         canvasLeft: 0,
         speedIn: 0.01,
         speedOut: 1.25,
         autoCalculateSquaresSize: true,
         color: '#000000'
      });

      $(document).ready(function () {
         pixelwave.start(start, middle, end);
      });