//include name of product in html

create array with list of objects
create master list of products
    bootstrap master list into local storage
choose 3 products at random from master list
    update product shown tally
        push to local storage
    remove 3 products from next turn list
        if not first turn, return previous items into next turn list
render 3 products on screen (doesn't need to be random)
    create event listeners
    set button value equal to name of product
get user update choice
    update chosen tally
        push to local storage
    are we done?
        no
            choose 3 products at random from from next turn list (beginning of loop)
        yes
            hide product images
            calculate results:
                get product chosen tally
                get product shown
                find percentage shown/chosen
            reveal results
            
