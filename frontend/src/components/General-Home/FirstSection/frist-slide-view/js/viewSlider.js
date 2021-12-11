import $ from "jquery"


import "../css/style.css"
import "../css/reset.css"




function viewSlider() {


	window.addEventListener('load', () => {


		let current_window_locationUrl = window.location.href

		var sliderContainers = $('.cd-slider-wrapper');
	
		if( sliderContainers.length > 0 ) initBlockSlider(sliderContainers);
	
		function initBlockSlider(sliderContainers) {
			sliderContainers.each(function(){
				var sliderContainer = $(this),
					slides = sliderContainer.children('.cd-slider').children('li'),
					sliderPagination = createSliderPagination(sliderContainer);
	
				sliderPagination.on('click', function(event){
					event.preventDefault();
					var selected = $(this),
						index = selected.index();
					updateSlider(index, sliderPagination, slides);
				});
	
				sliderContainer.on('swipeleft', function(){
					var bool = enableSwipe(sliderContainer),
						visibleSlide = sliderContainer.find('.is-visible').last(),
						visibleSlideIndex = visibleSlide.index();
					if(!visibleSlide.is(':last-child') && bool) {updateSlider(visibleSlideIndex + 1, sliderPagination, slides);}
				});
	
				sliderContainer.on('swiperight', function(){
					var bool = enableSwipe(sliderContainer),
						visibleSlide = sliderContainer.find('.is-visible').last(),
						visibleSlideIndex = visibleSlide.index();
					if(!visibleSlide.is(':first-child') && bool) {updateSlider(visibleSlideIndex - 1, sliderPagination, slides);}
				});
			});
		}
	
		function createSliderPagination(container){
			var wrapper = $('<ol class="cd-slider-navigation"></ol>');
			container.children('.cd-slider').find('li').each(function(index){
				var dotWrapper = (index === 0) ? $('<li class="selected"></li>') : $('<li></li>'),
					dot = $('<a href="#0"></a>').appendTo(dotWrapper);
				dotWrapper.appendTo(wrapper);
				var dotText = ( index+1 < 10 ) ? '0'+ (index+1) : index+1;
				dot.text(dotText);
			});
			wrapper.appendTo(container);
			return wrapper.children('li');
		}
	
		function updateSlider(n, navigation, slides) {
			navigation.removeClass('selected').eq(n).addClass('selected');
			slides.eq(n).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');
	
			//fixes a bug on Firefox with ul.cd-slider-navigation z-index
			navigation.parent('ul').addClass('slider-animating').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).removeClass('slider-animating');
			});
		}
	
		function enableSwipe(container) {
			return ( container.parents('.touch').length > 0 );
		}

	});
	


return (
	<>
	<div class="cd-slider-wrapper">

		<ul class="cd-slider">
		
			<li class="is-visible">
				<div class="cd-half-block image"></div>
			
				<div class="cd-half-block content">
				
					<div>
						<h2>Save</h2>
						
						
						<p>
							
						Reduce the cost of healthcare through our simple to use app
						</p>
						<a href="/home/admin-login" class="btn"
						onclick="location.href = location.href + this.href">Administrator Login</a>
					</div>
				</div>
			</li> { /* <!-- .cd-half-block.content --> */ }

			<li>
				<div class="cd-half-block image"></div>

				<div class="cd-half-block content light-bg">
					<div>
						<h2>Save Time</h2>
						<p>
							Providing convenience and giving you comfort is what
							we provide. Get your medication in real time
						</p>
					</div>
				</div> { /* <!-- .cd-half-block.content --> */ }
			</li>

			<li>
				<div class="cd-half-block image"></div>

				<div class="cd-half-block content">
					<div>
						<h2>Anywhere you  are</h2>
						<p>
							At home, work, hotel, traveling, hospital or in transit -
							You will always get access to our E-consultation or E-prescribtion
							services at your scheduled time.
						</p>
					</div>
				</div> { /* <!-- .cd-half-block.content --> */ }
			</li>

			<li>
				<div class="cd-half-block image"></div>

				<div class="cd-half-block content">
					<div>
						<h2>We Care</h2>
						<p>
							The E-consultation service by Medpharma. Book an appointment and talk to 
							one of our Specialist Medical Practitioners
						</p>
					</div>
				</div> {/* <!-- .cd-half-block.content --> */ }
			</li>
		</ul> { /* <!-- .cd-slider --> */ }
	</div> {/* <!--  cd-slider-wrapper --> */ }

</>

)

}

export default viewSlider