# The Useless Picture Mover
By [Noam Knispel](matilto:knispel.noam@gmail.com)

---

This little project provide two functionalities:
* Login user (only client-side implementation)
* Restore, move and save the location of user thumbnail

![Login & User Page](public/images/pages.gif?raw=true "Login & User Page")

## 🤓 A bit tech talking
This project is my first project using React.  
I tried to make it as simple (but readable, maintainable and scaleable) as possible.

All data (user, picture's position) saved in `localStorage`.

**Inside the code there are some comments about future implementation.**

Styling is based on `Bootstrap`, managed using `LESS`.   `CSS` files generated automatically (using `react-less-watcher` package)

## 👨🏻‍💻 More to come
Listed below few things I think that need to be added:
- [ ] **Tests** - unit & integration tests are not implemented due time limit

- [ ] **REST API** - replace `localStorage` to use REST API.
  - [ ] **Delay before saving** - add delay before sending the new location to the server (in case it's not the final location within X seconds)

  - [ ] **Auto-save notification** - show notification when the new location saved

- [ ] **Linting** - add `eslint` and `less-lint`, although I kept the code clean and consistent 😎


## 👤 Personal perspective
I enjoyed to make this project and learn React on the way.   
I'd love to explain or take any question / comment anytime!
