# XXX Final exam problem 4. Work here.
posts.update({'permalink':permalink}, {'$inc': {'comments.' + comment_ordinal + '.num_likes': 1}});