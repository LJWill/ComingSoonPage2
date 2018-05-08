Web-Info-Tech

To POST something in terminal:
curl -d '<var1>=<val1>&<var2>=<val2>&...' domain/path
e.g.
curl -d 'email=nameabc&password=pasbc' localhost:3001/api/sign_up