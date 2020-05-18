import api from './api';

class App {
  
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers (){
        // this.formEl.onsubmit = function(event){
        //    addRepository()
        // }
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if(repoInput.length == 0){
            return;
        }
        
        try {
            
            this.setLoading();

            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name ,
                description,
                avatar_url,
                html_url,
            })
            this.render()
        } catch (error) {
                alert('repo não existe')
        }
        this.setLoading(false)
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
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptioneEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl);
        });
    }
    
    setLoading(loading = true){
        if(loading == true){
            let loadingEL = document.createElement('span');
            loadingEL.appendChild(document.createTextNode('carregando'));
            loadingEL.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEL);
        }else{
            document.getElementById('loading').remove()
        }
    }
}

new App();