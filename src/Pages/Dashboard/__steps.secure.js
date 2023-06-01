/**
 * 1. do not show the link to them who should not see it 
 * only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing on the url
 * use adminRoute that will check wheter the user is admin or not 
 * if not admin then redirect to any other page. you could logout user and send them
 * and send them to the login page as well
 * ------------------
 *  TO SEND DATA 
 * ---------------
 * 1. verify jwt token
 * if possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity. Make only admin user is posting data by using verifyAdmin
 * 
 */