class App {
  
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers (){
        // this.formEl.onsubmit = function(event){
        //    addRepository()
        // }
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    addRepository(event){
        event.preventDefault();
        this.repositories.push({
            name : 'dersoncarlos.com.br',
            description: 'Tire sua ideia e der vida.',
            avatar_url: 'https://avatars3.githubusercontent.com/u/8890817?v=4',
            html_url: 'https://github.com/dersoncarlos',
        })
        this.render()
    }

    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptioneEl = document.createElement('p');
            descriptioneEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.appendChild(document.createTextNode('acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptioneEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl);
        });
    }
    
}

new App();