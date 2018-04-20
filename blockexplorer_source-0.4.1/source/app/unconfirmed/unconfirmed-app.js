/******************************************************************************
 * Copyright © 2017 XIN Community                                             *
 *                                                                            *
 * See the DEVELOPER-AGREEMENT.txt and LICENSE.txt files at  the top-level    *
 * directory of this distribution for the individual copyright  holder        *
 * information and the developer policies on copyright and licensing.         *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * XIN software, including this file, may be copied, modified, propagated,    *
 * or distributed except according to the terms contained in the LICENSE.txt  *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

angular.module('unconfirmedTransactions',
    ['baseBlockExplorer', 'restangular', 'datatables', 'datatables.bootstrap', 'ui.bootstrap', 'ui.router']);

angular.module('unconfirmedTransactions').constant('unconfirmedTransactionsConfig', {
    'unconfirmedTransactionsEndPoint': 'api',

});

angular.module('unconfirmedTransactions')
    .config(['RestangularProvider', 'unconfirmedTransactionsConfig', '$stateProvider', '$urlRouterProvider', 'baseConfig',
        function (RestangularProvider, unconfirmedTransactionsConfig, $stateProvider, $urlRouterProvider, baseConfig) {
            RestangularProvider.setBaseUrl(baseConfig.apiUrl);

            $stateProvider.state('blockExplorer.unconfirmedTransactions', {
                url: '^/unconfirmedTransactions',
                templateUrl: './unconfirmed/unconfirmed.html',
                controller: 'UnconfirmedTransactionsCtrl'

            });
        }]);
