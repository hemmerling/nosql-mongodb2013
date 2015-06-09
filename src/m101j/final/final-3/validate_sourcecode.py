import pymongo
import random
import re
import string
import sys
import getopt
import pprint

# Copyright 2012
# 10gen, Inc.
# Author: Andrew Erlichson   aje@10gen.com
#
# If you are a student and reading this code, turn back now, before
# the MongoDB gods smite you.

connection = None
db = None
mongostr = "mongodb://localhost:27017"
db_name = "enron"

# this script will check to see if you did the update correctly.

# command line arg parsing to make folks happy who want to run at mongolabs or mongohq
# this functions uses global vars to communicate. forgive me.
def arg_parsing(argv):

    global webhost
    global mongostr
    global db_name

    try:
        opts, args = getopt.getopt(argv, "-p:-m:-d:")
    except getopt.GetoptError:
        print "usage validate.py -m mongoConnectString"
        print "\tmongoConnectionString default to {0}".format(mongostr)
        print "\tdatabaseName defaults to {0}".format(db_name)
        sys.exit(2)
    for opt, arg in opts:
        if (opt == '-h'):
            print "usage validate.py -m mongoConnectString -d databaseName"
            sys.exit(2)
        elif opt in ("-m"):
            mongostr = arg
            print "Overriding MongoDB connection string to be ", mongostr
        elif opt in ("-d"):
            db_name = arg
            print "Overriding MongoDB database to be ", db_name


def graceful_exit(i):
    connection.close()
    sys.exit(i)


def document_updated():
    # we want to make sure that only one doc was updated and it was the right one
    sentinal = "mrpotatohead@10gen.com"
    msg_id = "<8147308.1075851042335.JavaMail.evans@thyme>"
    
    messages = db.messages

    try:
        count = messages.find({'headers.To':sentinal}).count()
    except:
        print "Can't query Mongo. Is it running?"
        raise

    if (count < 1):
        print "Sorry, but I could not find ", sentinal, " in the headers.To lists";
        return False

    if (count > 1):
        print "Sorry, but I found ", sentinal, " in multiple documents. You should probably re-import the dataset.";
        return False

    # count == 1..we need to make sure it's the right document
    doc  = messages.find_one({'headers.To':sentinal})
    if (doc == None):
        print "I thought there was a doc, and then there was none. Are you modifing the dataset while I am running?"

    if (('headers' not in doc ) or ('Message-ID' not in doc['headers'])):
        print "Document structure is not correct."
        pp = pprint.PrettyPrinter(depth=6)
        pp.pprint(doc)
        return False
    
    if (doc['headers']['Message-ID'] != msg_id):
        print "Found a document with ", sentinal, " but the Message-ID is not correct."
        print "Message-ID is ", doc['headers']['Message-ID']
        return False

    return True


# main section of the code
def main(argv):
            
    arg_parsing(argv)
    global connection
    global db

    print "Welcome to the Final Exam, Problem 3 Checker. My job is to make sure you updated the doc correctly"

    # connect to the db (mongostr was set in arg_parsing)
    try:
        connection = pymongo.Connection(mongostr, safe=True)
        db = connection[db_name]
    except:
        print "can't connect to MongoDB using", mongostr, ". Is it running?"
        exit(2)     # no graceful exit if it is not connected
        
    if (not document_updated()):
        print "Sorry, the update was not performed correctly."
        graceful_exit(1)
    
    # if you are reading this in cleartext, you are violating the honor code.
    # You can still redeem yourself. Get it working and don't submit the validation code until you do.
    # All a man has at the end of the day is his word.
    print "Tests Passed for Final 3. Your Final 3 validation code is 897h6723ghf25gd87gh28"
    graceful_exit(0)

if __name__ == "__main__":
    main(sys.argv[1:])

