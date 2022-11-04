# Frontend

Deploying using angular-cli-ghpages
Inside the sample folder, add the angular-cli-ghpages package using the following command:

ng add angular-cli-ghpages
Now, we can proceed to deploy.

The deploy command is simple, and we must add a base-href argument with the name of the repository in it:

ng deploy --base-href=/New-Portfolio/
Here, the deploy command does all the work. We don’t have to manually build or commit those files.

Once this command finishes running, check the files in the repository using:

https://github.com/<username>/<repositoryname>
We can see the hosted corresponding site at the following link:

https://<username>.github.io/<repositoryname>
The <username> refers to our GitHub username and <repositoryname> refers to the name of the repository created on GitHub.

Looking carefully at the files committed to the repository, we can say that only the output contents are committed to the repository instead of the whole application. So, this will use the root folder to get the files that can be hosted.

## Link
https://www.syncfusion.com/blogs/post/easy-steps-to-host-an-angular-app-in-github-pages.aspx

