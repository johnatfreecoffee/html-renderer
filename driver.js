(function() {
    'use strict';
    
    const glide = {
        getDoneCallback: function() {
            return window.glideGotIt;
        },
        
        getParameterName: function(param) {
            return param.name;
        },
        
        getParameterValue: function(param) {
            return param.value;
        },
        
        run: function(params) {
            if (typeof window.function !== 'function') {
                throw new Error('window.function is not defined');
            }
            
            try {
                const result = window.function.apply(null, params);
                return result;
            } catch (error) {
                console.error('Function execution error:', error);
                return undefined;
            }
        }
    };
    
    window.glide = glide;
    
    // Handle messages from Glide
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'glide-compute') {
            try {
                const result = glide.run(event.data.params);
                event.source.postMessage({
                    type: 'glide-result',
                    result: result,
                    id: event.data.id
                }, event.origin);
            } catch (error) {
                event.source.postMessage({
                    type: 'glide-error',
                    error: error.message,
                    id: event.data.id
                }, event.origin);
            }
        }
    });
})();
