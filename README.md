
# Mobile test

Simple application of a list of people from a town called Brastlewark.

Demo: https://alejandroid17.github.io/mobile_test/


## Views

### List of people

#### Characteristics:

- Limit the number of results for pages.
- Change to the next or previous page.
- Filter the list by username.
- Link to see the information of the person.

### Information of the person

#### Characteristics:

- Main profile.
- Main information.
- List of professions.
- List of friends.
- Back to the list.

### Loading

View that is displayed while the data is being loaded.


### Error 400

View that is displayed when the url does not exist.


### Error 500

View that is displayed when an error occurs.

## Test

- ItemList component
- UserInfo component
- UserCard component

	  npm test 

## Git branching system

In this case, the commits have been merged directly to the main branch, but I always do the commits in a branch and then I do a pull request. This pull request is accepted by the team and merged to the main branch.

### Semmantic commit messages

I normally use this semmantic commit messages:

	<type>: <message>
    
Where type can be:
	
    task: grunt task, etc
    test: add test
    fix: solve bug
    docs: add comments
    style: change the style, formatting, ...
    refactor: refactor the code
    feat: new feature
    
## Libraries

	bootstrap: to build basic components. 
    prop-types: to define the type of the props of the components.
    react-spinners: library with different loading spinners.
    reactstrap: library that work together bootstrap to define components.
    gh-pages: to upload the project to gitHub pages.