# Lorterias Front-end

This was a simple challenge for frontend when I a have to build a user interface from an API.<br>
[➤ The origal repository](https://github.com/brainnco-exs/readme-frontend?tab=readme-ov-file)

## 📋 Process

First, I decided to use Vite to start the project, using React and Typescript.

The next step was to visualize the problem and try to figure out how to solve it.

The way I chose was to build the interface and put all the pieces together before filling it in, and that was when my problems started.

In the [Figma](https://www.figma.com/design/H2qrYBCFMf4didYmxRwTxP/Brainn-Frontend-Challenge?node-id=1-2&t=ytWXpCHH0ynZNf7f-0) tamplate, you can see that the page has a sidebar with a kind of half-moon effect, and this turned out to be a bit more difficult than I'd imagined. 

My first attempt was to download the image and use it as the background for the sidebar. But another step I would have to take is that the background should change its color depending on the selected contest. I solved this by creating a component whit the image in svg format build whitin it, this way I can pass the color as a prop.

It works, but the image behaves in a way that I cannot understand: The other components do not fit on it. Jumping out of its parent component, etc.
After hours of trying to get it to work, I guess I just gave up. There were so many other parts to do and it took more time than it was worth. So a friend who wants to see what I was doing says that it will be much easier if I build the whole page, make the API requests and all the rest before I make the style of the page and put it all in the right place (Thanks [Paulo](https://github.com/PauloHFS)).

Starting from this way of building the application, I made a selection case to choose the right contest and make the API request as saving only the information that I needed (there are a lot of things there). Then it was just a question of filling the page with the information and creating as bubbles that was needed for which contest.

Finally, I just had to style the page and make it responsive in mobile.

## 💬 Comments

The API that the challenge indicated was no longer working, so I looked for one on my own and it presents a problem that blocks many requests in a short time through the CORS policy.

The application works, but only some of the requests made. To make it work perfectly, I had to use a [Google Chrome extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-BR) that can work around the problem.

## 📱 Tech

- Typescript
- React
- Styled-Compents

## 🥳 Thanks

I know that the challenge is not perfect, the final result is not exactly like the example. But I think that the main part of it was done and I like the result.
And of course, if you know a way to make the sidebar just like the template, I will be happy to learn it.
