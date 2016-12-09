<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Page 3</title>
	<link rel="stylesheet" type="text/css" href="styles.css">


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

</head>
<body>
	<main id="ajaxcontent">
		<section>
			<div class="container">
				<h1>Page 3</h1>
				<h2>From here you can load pages in via ajax.</h2>
				<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
				</p><p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
				<a href="index.php" class="btn loadit">Back to frontpage</a>
			</div>
		</section>
	</main>
	
	<script src="loadit.js"></script>
	<script>
		$(document).ready(function(){
			$("#ajaxcontent").loadit({
				complete: function(){
					console.log("DONW");
				}
			});
		});
	</script>
</body>
</html>