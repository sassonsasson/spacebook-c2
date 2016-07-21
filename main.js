   
    var posts = [];

    var Post = function(text, id) {
      this.text = text;
      this.id = id;
    };

   

      $('.btn').click(function(e) {
        e.preventDefault();

        var text = $('#post-name').val();
        var id = posts.length;

        var post = new Post(text, id);

        posts.push(post);

        add(post);
        
        bindEvents();
      })

    var add = function(something) {

      $('.posts').append('<p class="post" data-id="'+something.id+'">'+ something.text + '</p>');  
    };

      var bindEvents = function () {
      $('p').click(function () {
        $(this).remove();
      });
    }