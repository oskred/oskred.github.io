$('.contentFiveA')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ 
      $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
          $(this).children('.photo').css({'transform-origin': 
        ((e.pageX - $(this).offset().left) / $(this).width()) * 
        100 + '% ' + ((e.pageY - $(this).offset().top) / 
        $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">Want to work together?</div><br> I' + "'" + 'm always open to new ideas. Please feel free to contact me and let me know a little about the opportunity.  <br><br> <button type="button" class="btn btn-success btn-lg">Contact me</button></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
