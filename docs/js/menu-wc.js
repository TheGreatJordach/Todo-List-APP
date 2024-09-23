'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">todo-list-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link" >AppConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' : 'data-bs-target="#xs-controllers-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' :
                                            'id="xs-controllers-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' }>
                                            <li class="link">
                                                <a href="controllers/ReadTodoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadTodoController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WriteTodoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WriteTodoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' : 'data-bs-target="#xs-injectables-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' :
                                        'id="xs-injectables-links-module-TasksModule-2e7db2306ce881956197a6fd325a9bf0200b1f8d72b66944606b9c798ff60d7ce64a7a09026dd1634bb3715f3f61ab7abf1a53af8f28e7376ecd358880fdb2e5"' }>
                                        <li class="link">
                                            <a href="injectables/ReadTodoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadTodoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WriteTodoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WriteTodoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' :
                                            'id="xs-controllers-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' }>
                                            <li class="link">
                                                <a href="controllers/ReadUsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadUsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' :
                                        'id="xs-injectables-links-module-UsersModule-30c7fddf92db04c8d78aaf58b3a66807004042cf30b5993317c6592970d1cdb7dabf40d77eb0f1a2dd6ebe66a479821586fd4cee1546e0e3186ee52b946342bc"' }>
                                        <li class="link">
                                            <a href="injectables/ReadUsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadUsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VersioningModule.html" data-type="entity-link" >VersioningModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ReadTodoController.html" data-type="entity-link" >ReadTodoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReadUsersController.html" data-type="entity-link" >ReadUsersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WriteTodoController.html" data-type="entity-link" >WriteTodoController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Todo.html" data-type="entity-link" >Todo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TodoVersion.html" data-type="entity-link" >TodoVersion</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseTodoDto.html" data-type="entity-link" >BaseTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseUserDto.html" data-type="entity-link" >BaseUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoDto.html" data-type="entity-link" >CreateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentValidation.html" data-type="entity-link" >EnvironmentValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericPublicBaseDto.html" data-type="entity-link" >GenericPublicBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicTodoDto.html" data-type="entity-link" >PublicTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistryDate.html" data-type="entity-link" >RegistryDate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoVersionBaseDto.html" data-type="entity-link" >TodoVersionBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ReadTodoService.html" data-type="entity-link" >ReadTodoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReadUsersService.html" data-type="entity-link" >ReadUsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VersioningService.html" data-type="entity-link" >VersioningService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WriteTodoService.html" data-type="entity-link" >WriteTodoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});