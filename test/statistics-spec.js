define(
  ['statistics'],
  function(stats) {
    var assert = buster.assert;
    var refute = buster.refute;
    buster.testCase("Statistics", {
      'matchPoints: victory gives 3 points' : function() {
        assert.equals(stats.matchPoints([{wins:1, loss:0}]), 3);
      },
      'matchPoints: loss gives 0 points' : function() {
        assert.equals(stats.matchPoints([{wins:0, loss:2}]), 0);
      },
      'matchPoints: draw gives 1 point' : function() {
        assert.equals(stats.matchPoints([{wins:1, loss:1}]), 1);
      },
      'matchPoints: two wins, one loss and one draw gives 7 points' : function() {
        assert.equals(stats.matchPoints([{wins:2, loss:1}, 
                                         {wins:2, loss:0}, 
                                         {wins:1, loss:2}, 
                                         {wins:1, loss:1}]), 7);
      },
      'matchWinPercentage: One win gives 100 percent' : function() {
        assert.match(stats.matchWinPercentage([{wins:1, loss:0}]), "100.00");
      },
      'matchWinPercentage: One win and one loss gives 50 percent' : function() {
        assert.equals(stats.matchWinPercentage([{wins:2, loss:0}, {wins:1, loss:2}]), "50.00");
      },
      'matchWinPercentage: Minimum match win percentage is 33 percent' : function() {
        assert.equals(stats.matchWinPercentage([{wins:1, loss:2}, {wins:1, loss:2}]), "33.00");
      },
      'matchWinPercentage: One win and one draw gives 4/6' : function() {
        assert.match(stats.matchWinPercentage([{wins:2, loss:1}, {wins:1, loss:1}]), "66.67");
      },
      'matchWinPercentage: DCI scenario 1' : function() {
        assert.equals(stats.matchWinPercentage([{wins:2, loss:1}, 
                                                {wins:2, loss:0},
                                                {wins:1, loss:1},
                                                {wins:2, loss:0},
                                                {wins:1, loss:2},
                                                {wins:0, loss:2},
                                                {wins:2, loss:1}, 
                                                {wins:2, loss:0}]), "66.67");
      },
      'matchWinPercentage: DCI scenario 2' : function() {
        assert.equals(stats.matchWinPercentage([{wins:2, loss:1}, 
                                                {wins:0, loss:2},
                                                {wins:0, loss:2},
                                                {wins:0, loss:2}]), "33.00");
      },
      'matchWinPercentage: DCI scenario 3' : function() {
        assert.equals(stats.matchWinPercentage([{wins:2, loss:1}, 
                                                {wins:2, loss:0},
                                                {wins:2, loss:1},
                                                {wins:1, loss:2},
                                                {wins:0, loss:2}]), "60.00");
      },
      'gameWinPercentage: Two wins gives 100 percent' : function() {
        assert.equals(stats.gameWinPercentage([{wins:2, loss:0}]), "100.00");
      },
      'gameWinPercentage: One wins and one loss gives 50 percent' : function() {
        assert.equals(stats.gameWinPercentage([{wins:1, loss:1}]), "50.00");
      },
      'gameWinPercentage: DCI scenario 1' : function() {
        assert.equals(stats.gameWinPercentage([{wins:2, loss:0}, 
                                                {wins:2, loss:1},
                                                {wins:1, loss:2},
                                                {wins:2, loss:0}]), "70.00");
      },
      'gameWinPercentage: DCI scenario 2' : function() {
        assert.equals(stats.gameWinPercentage([{wins:1, loss:2}, 
                                               {wins:1, loss:2},
                                               {wins:0, loss:2},
                                               {wins:1, loss:2}]), "27.27");
      },
      'gameWinPercentage: DrawnGames are taken into account' : function() {
        assert.equals(stats.gameWinPercentage([{wins:1, loss:1, draws:1}]), "44.44");
      },
      'opponentsMatchWinPercentage: DCI scenario 1' : function() {
        assert.equals(stats.opponentsMatchWinPercentage([{opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:0, loss:2}, 
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:0, loss:2},
                                                                                         {wins:0, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:1}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:0, loss:2}, 
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}}]), "61.64");
      },
      'opponentsMatchWinPercentage: DCI scenario 2' : function() {
        assert.equals(stats.opponentsMatchWinPercentage([{opponent:function() {return undefined}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:0, loss:2},
                                                                                         {wins:0, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:1}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:0, loss:2}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:0, loss:2}, 
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}},
                                                         {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:1},
                                                                                         {wins:2, loss:0},
                                                                                         {wins:2, loss:0}, 
                                                                                         {wins:2, loss:1},
                                                                                         {wins:1, loss:2},
                                                                                         {wins:1, loss:1}]}}}]), "63.30");
      },
      'opponentsGameWinPercentage: Scenario 1' : function() {
        assert.equals(stats.opponentsGameWinPercentage([{opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:0, loss:2}, 
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:0, loss:2},
                                                                                        {wins:0, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:1}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:0, loss:2}, 
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}}]), "57.28");
      },
      'opponentsGameWinPercentage: Scenario 2' : function() {
        assert.equals(stats.opponentsGameWinPercentage([{opponent:function() {return undefined}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:0, loss:2},
                                                                                        {wins:0, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:1}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:0, loss:2}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:0, loss:2}, 
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}},
                                                        {opponent:function() {return {results:[{wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:1},
                                                                                        {wins:2, loss:0},
                                                                                        {wins:2, loss:0}, 
                                                                                        {wins:2, loss:1},
                                                                                        {wins:1, loss:2},
                                                                                        {wins:1, loss:1}]}}}]), "58.32");   
      }});
  });
