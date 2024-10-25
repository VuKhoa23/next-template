build:
	docker build -t vukhoa23/portfolio:$(tag) .
	docker rmi vukhoa23/portfolio:$$(($(tag) - 1))
	docker push vukhoa23/portfolio:$(tag)
run-build:
	docker run -p 3000:3000 --rm --detach vukhoa23/portfolio:$(tag) 