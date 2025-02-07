from unittest import TestCase
#import sys
#to access files outside of the test folder
#sys.path.append("..\src\file_name")
class T(TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass
    
    def test_dummy(self):
        self.assertEqual(1,1)
    def test_shouldFail(self):
        self.assertEqual(0,0)