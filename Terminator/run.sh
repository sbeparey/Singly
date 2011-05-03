#!/bin/bash
git pull origin master

# add new TOS to track here, just cut/paste the same pattern
lynx -dump -useragent="Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.A.B.C Safari/525.13" http://www.facebook.com/terms.php > facebook_terms.txt
lynx -dump -useragent="Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.A.B.C Safari/525.13" http://developers.facebook.com/policy/ > facebook_dev_policy.txt

git commit -am "batch"
git push origin master

