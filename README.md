## Params For API

This API will take the params of **Course (i.e COMPXXXX)** and **Term(i.e 1)**, 
and it will use your **device date** to take the year.

## What is this API Retuning

This API will return the assesment and weighting on each component and adds up to 100% 
course completition, the weighting is returned on ```weight x 100``` format, which for example if the weighting is **45%**, it will return as **4500**. Mainly this API is used for [talea tally](https://taleatally.vercel.app), 
a website to help UNSW Student to track one's course performance.

## How To Use
call the [scraping api](https://ucoscrapingapi.vercel.app) with format [api link]/$course=[any unsw course]&term=[past or current team]

note* for the course you could use any case(i.e COMPXXXX & compXXXX is valid), for the term, please only input the term number.