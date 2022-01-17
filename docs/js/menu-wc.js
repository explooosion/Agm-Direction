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
                    <a href="index.html" data-type="index-link">agm-direction documentation</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AgmDirectionModule.html" data-type="entity-link" >AgmDirectionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AgmDirectionModule-783724282419e6e1b962539508878a50127d398e904e364a46b919d09bc5bc0f4f622847bebf9f12a8d1b193ca01b19ef6e1ffc90f7faf108da3eef33fa6c2e3"' : 'data-target="#xs-directives-links-module-AgmDirectionModule-783724282419e6e1b962539508878a50127d398e904e364a46b919d09bc5bc0f4f622847bebf9f12a8d1b193ca01b19ef6e1ffc90f7faf108da3eef33fa6c2e3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AgmDirectionModule-783724282419e6e1b962539508878a50127d398e904e364a46b919d09bc5bc0f4f622847bebf9f12a8d1b193ca01b19ef6e1ffc90f7faf108da3eef33fa6c2e3"' :
                                        'id="xs-directives-links-module-AgmDirectionModule-783724282419e6e1b962539508878a50127d398e904e364a46b919d09bc5bc0f4f622847bebf9f12a8d1b193ca01b19ef6e1ffc90f7faf108da3eef33fa6c2e3"' }>
                                        <li class="link">
                                            <a href="directives/AgmDirection.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgmDirection</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-160a2f5c92c14c517d8912b7231af1b8cb26adc6249ef548ca1adc0cbbdfc58785877821dc69640c7abbf172e23fc3c6910417b701c6109d5339af55d9042b6a"' : 'data-target="#xs-components-links-module-AppModule-160a2f5c92c14c517d8912b7231af1b8cb26adc6249ef548ca1adc0cbbdfc58785877821dc69640c7abbf172e23fc3c6910417b701c6109d5339af55d9042b6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-160a2f5c92c14c517d8912b7231af1b8cb26adc6249ef548ca1adc0cbbdfc58785877821dc69640c7abbf172e23fc3c6910417b701c6109d5339af55d9042b6a"' :
                                            'id="xs-components-links-module-AppModule-160a2f5c92c14c517d8912b7231af1b8cb26adc6249ef548ca1adc0cbbdfc58785877821dc69640c7abbf172e23fc3c6910417b701c6109d5339af55d9042b6a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});