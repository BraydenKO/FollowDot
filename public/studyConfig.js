/* MASTER STUDY CONFIGURATION
 * Change this file for a new study variant. Edit the HTML only when UI or game
 * mechanics fundamentally change.
 */
(function () {
    'use strict';
    const config = {
        study: {
            name: 'Motor Learning Study',
            collectionName: 'experiments_v2_high_noFB_right_ccw'
        },
        eligibility: {
            minimumAge: 18,
            allowedDevices: ['mouse'],
            handedness: {
                recruitingFor: 'right', // 'right', 'left', or 'both'
                criticalQuestionsLeft: ['trackpad', 'writing', 'drawing', 'throwing', 'knife'],
                criticalQuestionsRight: [
                    'writing', 'drawing', 'throwing', 'scissors', 'toothbrush',
                    'knife', 'spoon', 'broom', 'match', 'box', 'mouse', 'trackpad',
                    'key', 'hammer', 'brush', 'cup'
                ],
                questions: [
                    { id: 'writing', label: 'Writing' }, { id: 'drawing', label: 'Drawing' },
                    { id: 'throwing', label: 'Throwing' }, { id: 'scissors', label: 'Using scissors' },
                    { id: 'toothbrush', label: 'Using a toothbrush' },
                    { id: 'knife', label: 'Using a knife (without a fork)' },
                    { id: 'spoon', label: 'Using a spoon' },
                    { id: 'broom', label: 'Using a broom (upper hand)' },
                    { id: 'match', label: 'Striking a match' },
                    { id: 'box', label: 'Opening a box (holding the lid)' },
                    { id: 'mouse', label: 'Holding a computer mouse' },
                    { id: 'trackpad', label: 'Using a computer trackpad' },
                    { id: 'key', label: 'Using a key to unlock a door' },
                    { id: 'hammer', label: 'Holding a hammer' },
                    { id: 'brush', label: 'Holding a brush or comb' },
                    { id: 'cup', label: 'Holding a cup while drinking' }
                ]
            }
        },
        assignment: { handToUse: 'right' },
        game: {
            frequencyMode: 'high',
            perturbation: { degreesPerTrial: -1, maxDegrees: -30 },
            trials: { baseline: 16, rampUp: 30, hold: 13, washout: 4 },
            durations: { trialLength: 30000 },
            sampling: { rate: 20, dt: 1000 },
            proximity: { closeDistance: 100 },
            countdown: { duration: 0.5 },
            feedback: { noFeedbackEveryN: 2 },
            fly: {
                frequencyModes: {
                    low: {
                        frequencies: { x: [2 / 30, 4 / 30, 6 / 30], y: [1 / 30, 3 / 30, 5 / 30] },
                        amplitudeSets: { x: [2.684, 3.031, 3.379], y: [2.732, 2.845, 2.917] }
                    },
                    high: {
                        frequencies: { x: [44 / 30, 42 / 30, 40 / 30], y: [43 / 30, 41 / 30, 39 / 30] },
                        amplitudeSets: { x: [2.684, 3.031, 3.379], y: [2.732, 2.845, 2.917] }
                    }
                },
                scaleFactors: { y: { base: 40 }, x: { base: 61 } },
                minDimensions: { width: 1440, height: 900 }
            }
        },
        firebase: {
            enabled: true,
            statisticsDocument: 'study_statistics',
            trialsSubcollection: 'trials',
            surveyDocument: 'survey_responses',
            trialsPerUpload: 4,
            documentPrefixes: { baseline: 'baseline', rampUp: 'ramp', hold: 'hold', washout: 'washout' }
        },
        upload: { enabled: true, showUploadStatus: true },
        survey: { maxWords: 300 },
        charts: { samplingInterval: 50 },
        navigation: {
            requireConsent: true, consentPage: 'index.html',
            gamePage: 'game.html', completionPage: 'done.html'
        }
    };

    function deepFreeze(value) {
        if (value && typeof value === 'object' && !Object.isFrozen(value)) {
            Object.values(value).forEach(deepFreeze);
            Object.freeze(value);
        }
        return value;
    }
    if (!config.game.fly.frequencyModes[config.game.frequencyMode]) {
        throw new Error(`Unknown frequencyMode in studyConfig.js: ${config.game.frequencyMode}`);
    }
    if (!config.study.collectionName) {
        throw new Error('study.collectionName is required in studyConfig.js');
    }
    window.STUDY_CONFIG = deepFreeze(config);
    window.cloneStudyConfig = value => JSON.parse(JSON.stringify(value));
}());
