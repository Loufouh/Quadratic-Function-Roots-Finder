clear:
	@rm .*.swp *~ || echo  "\033[0;33mRoot already clean !\033[0m"
	@rm inc/.*.swp inc/*~ || echo "\033[0;33minc/ already clean !\033[0m"
	@rm inc/draw/.*.swp inc/draw/*~ || echo "\033[0;33minc/draw/ already clean !\033[0m" 
	@rm inc/math/.*.swp inc/math/*~ || echo "\033[0;33minc/math/ already clean !\033[0m" 
	@echo "\033[1;36m--------------\033[0m"
	@echo "\033[1;36mCleaned up !\033[0m"
	@echo "\033[1;36m--------------\033[0m"
