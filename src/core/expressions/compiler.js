var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Expression = (function () {
    function Expression(nodeType) {
        this.nodeType = nodeType;
    }
    Expression.prototype.accept = function (visitor) {
        throw new Error("not implemented");
    };
    Expression.prototype.acceptGeneric = function (visitor) {
        throw new Error("not implemented");
    };
    Expression.prototype.toString = function () {
        return new PrintVisitor().visit(this);
    };
    Expression.prototype.toBonsai = function () {
        return new BonsaiVisitor().visit(this);
    };
    Expression.block = function (variables, expressions) {
        return new BlockExpression(variables, expressions);
    };
    Expression.constant = function (value) {
        return new ConstantExpression(value);
    };
    Expression.parameter = function (name) {
        return new ParameterExpression(name);
    };
    Expression.condition = function (test, ifTrue, ifFalse) {
        return new ConditionalExpression(test, ifTrue, ifFalse);
    };
    Expression.add = function (left, right) {
        return new BinaryExpression(ExpressionType.Add, left, right);
    };
    Expression.subtract = function (left, right) {
        return new BinaryExpression(ExpressionType.Subtract, left, right);
    };
    Expression.multiply = function (left, right) {
        return new BinaryExpression(ExpressionType.Multiply, left, right);
    };
    Expression.divide = function (left, right) {
        return new BinaryExpression(ExpressionType.Divide, left, right);
    };
    Expression.modulo = function (left, right) {
        return new BinaryExpression(ExpressionType.Modulo, left, right);
    };
    Expression.and = function (left, right) {
        return new BinaryExpression(ExpressionType.And, left, right);
    };
    Expression.andAlso = function (left, right) {
        return new BinaryExpression(ExpressionType.AndAlso, left, right);
    };
    Expression.or = function (left, right) {
        return new BinaryExpression(ExpressionType.Or, left, right);
    };
    Expression.orElse = function (left, right) {
        return new BinaryExpression(ExpressionType.OrElse, left, right);
    };
    Expression.exclusiveOr = function (left, right) {
        return new BinaryExpression(ExpressionType.ExclusiveOr, left, right);
    };
    Expression.equal = function (left, right) {
        return new BinaryExpression(ExpressionType.Equal, left, right);
    };
    Expression.notEqual = function (left, right) {
        return new BinaryExpression(ExpressionType.NotEqual, left, right);
    };
    Expression.lessThan = function (left, right) {
        return new BinaryExpression(ExpressionType.LessThan, left, right);
    };
    Expression.lessThanOrEqual = function (left, right) {
        return new BinaryExpression(ExpressionType.LessThanOrEqual, left, right);
    };
    Expression.greaterThan = function (left, right) {
        return new BinaryExpression(ExpressionType.GreaterThan, left, right);
    };
    Expression.greaterThanOrEqual = function (left, right) {
        return new BinaryExpression(ExpressionType.GreaterThanOrEqual, left, right);
    };
    Expression.leftShift = function (left, right) {
        return new BinaryExpression(ExpressionType.LeftShift, left, right);
    };
    Expression.rightShift = function (left, right) {
        return new BinaryExpression(ExpressionType.RightShift, left, right);
    };
    Expression.arrayIndex = function (left, right) {
        return new BinaryExpression(ExpressionType.ArrayIndex, left, right);
    };
    Expression.assign = function (left, right) {
        return new BinaryExpression(ExpressionType.Assign, left, right);
    };
    Expression.addAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.AddAssign, left, right);
    };
    Expression.subtractAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.SubtractAssign, left, right);
    };
    Expression.multiplyAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.MultiplyAssign, left, right);
    };
    Expression.divideAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.DivideAssign, left, right);
    };
    Expression.moduloAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.ModuloAssign, left, right);
    };
    Expression.leftShiftAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.LeftShiftAssign, left, right);
    };
    Expression.rightShiftAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.RightShiftAssign, left, right);
    };
    Expression.andAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.AndAssign, left, right);
    };
    Expression.orAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.OrAssign, left, right);
    };
    Expression.exclusiveOrAssign = function (left, right) {
        return new BinaryExpression(ExpressionType.ExclusiveOrAssign, left, right);
    };
    Expression.not = function (operand) {
        return new UnaryExpression(ExpressionType.Not, operand);
    };
    Expression.unaryPlus = function (operand) {
        return new UnaryExpression(ExpressionType.UnaryPlus, operand);
    };
    Expression.negate = function (operand) {
        return new UnaryExpression(ExpressionType.Negate, operand);
    };
    Expression.onesComplement = function (operand) {
        return new UnaryExpression(ExpressionType.OnesComplement, operand);
    };
    Expression.postDecrementAssign = function (operand) {
        return new UnaryExpression(ExpressionType.PostDecrementAssign, operand);
    };
    Expression.postIncrementAssign = function (operand) {
        return new UnaryExpression(ExpressionType.PostIncrementAssign, operand);
    };
    Expression.preDecrementAssign = function (operand) {
        return new UnaryExpression(ExpressionType.PreDecrementAssign, operand);
    };
    Expression.preIncrementAssign = function (operand) {
        return new UnaryExpression(ExpressionType.PreIncrementAssign, operand);
    };
    Expression.quote = function (operand) {
        return new UnaryExpression(ExpressionType.Quote, operand);
    };
    Expression.lambda = function (body, parameters) {
        return new LambdaExpression(body, parameters);
    };
    Expression.invoke = function (expression, args) {
        return new InvocationExpression(expression, args);
    };
    Expression.new = function (typeName, args) {
        return new NewExpression(typeName, args);
    };
    Expression.functionCall = function (obj, methodName, args) {
        return new FunctionCallExpression(obj, methodName, args);
    };
    Expression.member = function (obj, memberName) {
        return new MemberExpression(obj, memberName);
    };
    Expression.index = function (obj, args) {
        return new IndexExpression(obj, args);
    };
    return Expression;
}());
var ExpressionVisitorGeneric = (function () {
    function ExpressionVisitorGeneric() {
    }
    ExpressionVisitorGeneric.prototype.visit = function (node) {
        if (node === null) {
            return null;
        }
        return node.acceptGeneric(this);
    };
    ExpressionVisitorGeneric.prototype.visitBlock = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitConstant = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitParameter = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitBinary = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitUnary = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitConditional = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitLambda = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitInvoke = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitCall = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitNew = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitMember = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitIndex = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitExtension = function (node) { throw new Error("not implemented"); };
    ExpressionVisitorGeneric.prototype.visitMany = function (nodes) {
        var res = new Array(nodes.length);
        for (var i = 0; i < nodes.length; i++) {
            var oldNode = nodes[i];
            var newNode = this.visit(oldNode);
            res[i] = newNode;
        }
        return res;
    };
    return ExpressionVisitorGeneric;
}());
var ExpressionVisitor = (function () {
    function ExpressionVisitor() {
    }
    ExpressionVisitor.prototype.visit = function (node) {
        if (node === null) {
            return null;
        }
        return node.accept(this);
    };
    ExpressionVisitor.prototype.visitBlock = function (node) {
        return node;
    };
    ExpressionVisitor.prototype.visitConstant = function (node) {
        return node;
    };
    ExpressionVisitor.prototype.visitParameter = function (node) {
        return node;
    };
    ExpressionVisitor.prototype.visitBinary = function (node) {
        return node.update(this.visit(node.left), this.visit(node.right));
    };
    ExpressionVisitor.prototype.visitUnary = function (node) {
        return node.update(this.visit(node.operand));
    };
    ExpressionVisitor.prototype.visitConditional = function (node) {
        return node.update(this.visit(node.test), this.visit(node.ifTrue), this.visit(node.ifFalse));
    };
    ExpressionVisitor.prototype.visitLambda = function (node) {
        return node.update(this.visit(node.body), this.visitMany(node.parameters));
    };
    ExpressionVisitor.prototype.visitInvoke = function (node) {
        return node.update(this.visit(node.expression), this.visitMany(node.args));
    };
    ExpressionVisitor.prototype.visitCall = function (node) {
        return node.update(this.visit(node.obj), this.visitMany(node.args));
    };
    ExpressionVisitor.prototype.visitNew = function (node) {
        return node.update(this.visitMany(node.args));
    };
    ExpressionVisitor.prototype.visitMember = function (node) {
        return node.update(this.visit(node.obj));
    };
    ExpressionVisitor.prototype.visitIndex = function (node) {
        return node.update(this.visit(node.obj), this.visitMany(node.args));
    };
    ExpressionVisitor.prototype.visitExtension = function (node) {
        throw new Error("not implemented");
    };
    ExpressionVisitor.prototype.visitMany = function (nodes) {
        var res = new Array(nodes.length);
        for (var i = 0; i < nodes.length; i++) {
            var oldNode = nodes[i];
            var newNode = this.visit(oldNode);
            res[i] = newNode;
        }
        return res;
    };
    return ExpressionVisitor;
}());
var BlockExpression = (function (_super) {
    __extends(BlockExpression, _super);
    function BlockExpression(variables, expressions) {
        _super.call(this, ExpressionType.Block);
        this._variables = variables;
        this._expressions = expressions;
    }
    Object.defineProperty(BlockExpression.prototype, "variables", {
        get: function () {
            return this._variables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockExpression.prototype, "expressions", {
        get: function () {
            return this._expressions;
        },
        enumerable: true,
        configurable: true
    });
    BlockExpression.prototype.accept = function (visitor) {
        return visitor.visitBlock(this);
    };
    BlockExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitBlock(this);
    };
    BlockExpression.prototype.update = function (variables, expressions) {
        if (variables !== this._variables || expressions !== this._expressions) {
            return new BlockExpression(variables, expressions);
        }
        return this;
    };
    return BlockExpression;
}(Expression));
var ConstantExpression = (function (_super) {
    __extends(ConstantExpression, _super);
    function ConstantExpression(value) {
        _super.call(this, ExpressionType.Constant);
        this._value = value;
    }
    Object.defineProperty(ConstantExpression.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    ConstantExpression.prototype.accept = function (visitor) {
        return visitor.visitConstant(this);
    };
    ConstantExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitConstant(this);
    };
    return ConstantExpression;
}(Expression));
var LiteralConstantExpression = (function (_super) {
    __extends(LiteralConstantExpression, _super);
    function LiteralConstantExpression(value) {
        _super.call(this, ExpressionType.Constant);
        this._value = value;
    }
    Object.defineProperty(LiteralConstantExpression.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    LiteralConstantExpression.prototype.accept = function (visitor) {
        return visitor.visitConstant(this);
    };
    LiteralConstantExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitConstant(this);
    };
    return LiteralConstantExpression;
}(Expression));
var ParameterExpression = (function (_super) {
    __extends(ParameterExpression, _super);
    function ParameterExpression(name) {
        _super.call(this, ExpressionType.Parameter);
        this._name = name;
    }
    Object.defineProperty(ParameterExpression.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    ParameterExpression.prototype.accept = function (visitor) {
        return visitor.visitParameter(this);
    };
    ParameterExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitParameter(this);
    };
    ParameterExpression.prototype.let = function (selector) {
        return selector(this);
    };
    return ParameterExpression;
}(Expression));
var UnaryExpression = (function (_super) {
    __extends(UnaryExpression, _super);
    function UnaryExpression(nodeType, operand) {
        _super.call(this, nodeType);
        this._operand = operand;
    }
    Object.defineProperty(UnaryExpression.prototype, "operand", {
        get: function () {
            return this._operand;
        },
        enumerable: true,
        configurable: true
    });
    UnaryExpression.prototype.accept = function (visitor) {
        return visitor.visitUnary(this);
    };
    UnaryExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitUnary(this);
    };
    UnaryExpression.prototype.update = function (operand) {
        if (operand !== this._operand) {
            return new UnaryExpression(this.nodeType, operand);
        }
        return this;
    };
    return UnaryExpression;
}(Expression));
var BinaryExpression = (function (_super) {
    __extends(BinaryExpression, _super);
    function BinaryExpression(nodeType, left, right) {
        _super.call(this, nodeType);
        this._left = left;
        this._right = right;
    }
    Object.defineProperty(BinaryExpression.prototype, "left", {
        get: function () {
            return this._left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryExpression.prototype, "right", {
        get: function () {
            return this._right;
        },
        enumerable: true,
        configurable: true
    });
    BinaryExpression.prototype.accept = function (visitor) {
        return visitor.visitBinary(this);
    };
    BinaryExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitBinary(this);
    };
    BinaryExpression.prototype.update = function (left, right) {
        if (left !== this._left || right !== this._right) {
            return new BinaryExpression(this.nodeType, left, right);
        }
        return this;
    };
    return BinaryExpression;
}(Expression));
var ConditionalExpression = (function (_super) {
    __extends(ConditionalExpression, _super);
    function ConditionalExpression(test, ifTrue, ifFalse) {
        _super.call(this, ExpressionType.Condition);
        this._test = test;
        this._ifTrue = ifTrue;
        this._ifFalse = ifFalse;
    }
    Object.defineProperty(ConditionalExpression.prototype, "test", {
        get: function () {
            return this._test;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionalExpression.prototype, "ifTrue", {
        get: function () {
            return this._ifTrue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionalExpression.prototype, "ifFalse", {
        get: function () {
            return this._ifTrue;
        },
        enumerable: true,
        configurable: true
    });
    ConditionalExpression.prototype.accept = function (visitor) {
        return visitor.visitConditional(this);
    };
    ConditionalExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitConditional(this);
    };
    ConditionalExpression.prototype.update = function (test, ifTrue, ifFalse) {
        if (test !== this._test || ifTrue !== this._ifTrue || ifFalse !== this._ifFalse) {
            return new ConditionalExpression(test, ifTrue, ifFalse);
        }
        return this;
    };
    return ConditionalExpression;
}(Expression));
var LambdaExpression = (function (_super) {
    __extends(LambdaExpression, _super);
    function LambdaExpression(body, parameters) {
        _super.call(this, ExpressionType.Lambda);
        this._body = body;
        this._parameters = parameters;
    }
    Object.defineProperty(LambdaExpression.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LambdaExpression.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: true,
        configurable: true
    });
    LambdaExpression.prototype.accept = function (visitor) {
        return visitor.visitLambda(this);
    };
    LambdaExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitLambda(this);
    };
    LambdaExpression.prototype.update = function (body, parameters) {
        if (body !== this._body || parameters !== this._parameters) {
            return new LambdaExpression(body, parameters);
        }
        return this;
    };
    LambdaExpression.prototype.compileToFunction = function (debug) {
        var comp = new LambdaCompiler();
        comp.visit(this);
        var code = comp.code;
        code = code.replace(/"/g, "\\\""); // TODO: more escape sequences
        code = "new Function(\"return " + code + ";\")";
        code = code.replace(/\r?\n|\r/g, "");
        if (debug) {
            alert(code);
        }
        return code;
    };
    LambdaExpression.prototype.compile = function (debug) {
        var code = this.compileToFunction(debug);
        return eval(code)();
    };
    return LambdaExpression;
}(Expression));
var InvocationExpression = (function (_super) {
    __extends(InvocationExpression, _super);
    function InvocationExpression(expression, args) {
        _super.call(this, ExpressionType.Invoke);
        this._expression = expression;
        this._args = args;
    }
    Object.defineProperty(InvocationExpression.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvocationExpression.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    InvocationExpression.prototype.accept = function (visitor) {
        return visitor.visitInvoke(this);
    };
    InvocationExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitInvoke(this);
    };
    InvocationExpression.prototype.update = function (expression, args) {
        if (expression !== this._expression || args !== this._args) {
            return new InvocationExpression(expression, args);
        }
        return this;
    };
    return InvocationExpression;
}(Expression));
var FunctionCallExpression = (function (_super) {
    __extends(FunctionCallExpression, _super);
    function FunctionCallExpression(expression, methodName, args) {
        _super.call(this, ExpressionType.Call);
        this._expression = expression;
        this._method = methodName;
        this._args = args;
    }
    Object.defineProperty(FunctionCallExpression.prototype, "obj", {
        get: function () {
            return this._expression;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionCallExpression.prototype, "method", {
        get: function () {
            return this._method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionCallExpression.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    FunctionCallExpression.prototype.accept = function (visitor) {
        return visitor.visitCall(this);
    };
    FunctionCallExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitCall(this);
    };
    FunctionCallExpression.prototype.update = function (expression, args) {
        if (expression !== this._expression || args !== this._args) {
            return new FunctionCallExpression(expression, this._method, args);
        }
        return this;
    };
    return FunctionCallExpression;
}(Expression));
var IndexExpression = (function (_super) {
    __extends(IndexExpression, _super);
    function IndexExpression(expression, args) {
        _super.call(this, ExpressionType.Index);
        this._expression = expression;
        this._args = args;
    }
    Object.defineProperty(IndexExpression.prototype, "obj", {
        get: function () {
            return this._expression;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexExpression.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    IndexExpression.prototype.accept = function (visitor) {
        return visitor.visitIndex(this);
    };
    IndexExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitIndex(this);
    };
    IndexExpression.prototype.update = function (expression, args) {
        if (expression !== this._expression || args !== this._args) {
            return new IndexExpression(expression, args);
        }
        return this;
    };
    return IndexExpression;
}(Expression));
var NewExpression = (function (_super) {
    __extends(NewExpression, _super);
    function NewExpression(typeName, args) {
        _super.call(this, ExpressionType.New);
        this._type = typeName;
        this._args = args;
    }
    Object.defineProperty(NewExpression.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewExpression.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    NewExpression.prototype.accept = function (visitor) {
        return visitor.visitNew(this);
    };
    NewExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitNew(this);
    };
    NewExpression.prototype.update = function (args) {
        if (args !== this._args) {
            return new NewExpression(this._type, args);
        }
        return this;
    };
    return NewExpression;
}(Expression));
var MemberExpression = (function (_super) {
    __extends(MemberExpression, _super);
    function MemberExpression(obj, memberName) {
        _super.call(this, ExpressionType.Member);
        this._obj = obj;
        this._member = memberName;
    }
    Object.defineProperty(MemberExpression.prototype, "obj", {
        get: function () {
            return this._obj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MemberExpression.prototype, "member", {
        get: function () {
            return this._member;
        },
        enumerable: true,
        configurable: true
    });
    MemberExpression.prototype.accept = function (visitor) {
        return visitor.visitMember(this);
    };
    MemberExpression.prototype.acceptGeneric = function (visitor) {
        return visitor.visitMember(this);
    };
    MemberExpression.prototype.update = function (obj) {
        if (obj !== this._obj) {
            return new MemberExpression(obj, this._member);
        }
        return this;
    };
    return MemberExpression;
}(Expression));
var LambdaCompiler = (function (_super) {
    __extends(LambdaCompiler, _super);
    function LambdaCompiler() {
        _super.call(this);
        this._stack = [];
    }
    Object.defineProperty(LambdaCompiler.prototype, "code", {
        get: function () {
            if (this._stack.length != 1)
                throw new Error("invalid code generation");
            return this._stack[0];
        },
        enumerable: true,
        configurable: true
    });
    LambdaCompiler.prototype.visitBlock = function (node) {
        var vars = node.variables.map(function (v) { return ("var " + v.name + ";"); });
        this.visitMany(node.expressions);
        var n = node.expressions.length;
        var exprs = new Array(n);
        for (var i = 0; i < n; ++i) {
            exprs[n - i - 1] = this._stack.pop();
        }
        var varList = vars.join(' ');
        var exprList = exprs.join('; ');
        this._stack.push("{ " + varList + " " + exprList + "; }");
        return node;
    };
    LambdaCompiler.prototype.visitConstant = function (node) {
        var value = "";
        if (typeof node.value == "string") {
            value = "\"" + node.value + "\""; // TODO: escape characters
        }
        else if (node.value instanceof Array) {
            value = JSON.stringify(node.value);
        }
        else if (node.value === undefined) {
            value = "undefined";
        }
        else {
            value = node.value.toString(); // TODO
        }
        this._stack.push(value);
        return node;
    };
    LambdaCompiler.prototype.visitUnary = function (node) {
        this.visit(node.operand);
        var o = this._stack.pop();
        var i = "";
        switch (node.nodeType) {
            case ExpressionType.Negate:
                i = "-";
                break;
            case ExpressionType.UnaryPlus:
                i = "+";
                break;
            case ExpressionType.Not:
                i = "!";
                break;
            case ExpressionType.OnesComplement:
                i = "~";
                break;
        }
        var res = "(" + i + "" + o + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitBinary = function (node) {
        this.visit(node.left);
        this.visit(node.right);
        var r = this._stack.pop();
        var l = this._stack.pop();
        var i = "";
        switch (node.nodeType) {
            case ExpressionType.Add:
                i = "+";
                break;
            case ExpressionType.Subtract:
                i = "-";
                break;
            case ExpressionType.Multiply:
                i = "*";
                break;
            case ExpressionType.Divide:
                i = "/";
                break;
            case ExpressionType.Modulo:
                i = "%";
                break;
            case ExpressionType.And:
                i = "&";
                break;
            case ExpressionType.Or:
                i = "|";
                break;
            case ExpressionType.AndAlso:
                i = "&&";
                break;
            case ExpressionType.OrElse:
                i = "||";
                break;
            case ExpressionType.ExclusiveOr:
                i = "^";
                break;
            case ExpressionType.Equal:
                i = "===";
                break;
            case ExpressionType.NotEqual:
                i = "!==";
                break;
            case ExpressionType.LessThan:
                i = "<";
                break;
            case ExpressionType.LessThanOrEqual:
                i = "<=";
                break;
            case ExpressionType.GreaterThan:
                i = ">";
                break;
            case ExpressionType.GreaterThanOrEqual:
                i = ">=";
                break;
            case ExpressionType.LeftShift:
                i = "<<";
                break;
            case ExpressionType.RightShift:
                i = ">>";
                break;
            case ExpressionType.Assign:
                i = "=";
                break;
            case ExpressionType.AddAssign:
                i = "+=";
                break;
            case ExpressionType.SubtractAssign:
                i = "-=";
                break;
            case ExpressionType.MultiplyAssign:
                i = "*=";
                break;
            case ExpressionType.DivideAssign:
                i = "/=";
                break;
            case ExpressionType.ModuloAssign:
                i = "%=";
                break;
            case ExpressionType.LeftShiftAssign:
                i = "<<=";
                break;
            case ExpressionType.RightShiftAssign:
                i = ">>=";
                break;
            case ExpressionType.AndAssign:
                i = "&=";
                break;
            case ExpressionType.OrAssign:
                i = "|=";
                break;
            case ExpressionType.ExclusiveOrAssign:
                i = "^=";
                break;
            default:
                throw new Error("Invalid binary token.");
        }
        var res = "(" + l + " " + i + " " + r + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitConditional = function (node) {
        this.visit(node.test);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);
        var f = this._stack.pop();
        var t = this._stack.pop();
        var c = this._stack.pop();
        var res = "(" + c + " ? " + t + " : " + f + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitParameter = function (node) {
        this._stack.push(node.name);
        return node;
    };
    LambdaCompiler.prototype.visitLambda = function (node) {
        this.visitMany(node.parameters);
        this.visit(node.body);
        var body = this._stack.pop();
        var n = node.parameters.length;
        var args = new Array(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }
        var allArgs = args.join(", ");
        var res = "function(" + allArgs + ") { " + body + "; }";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitInvoke = function (node) {
        this.visit(node.expression);
        this.visitMany(node.args);
        var n = node.args.length;
        var args = new Array(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }
        var argList = args.join(", ");
        var func = this._stack.pop();
        var res = func + "(" + argList + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitCall = function (node) {
        var res = "";
        if (node.obj !== null) {
            this.visit(node.obj);
            res = this._stack.pop() + ".";
        }
        this.visitMany(node.args);
        var n = node.args.length;
        var args = new Array(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }
        var argList = args.join(", ");
        res += node.method + "(" + argList + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitNew = function (node) {
        this.visitMany(node.args);
        var n = node.args.length;
        var args = new Array(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }
        var argList = args.join(", ");
        var res = "new " + node.type + "(" + argList + ")";
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitMember = function (node) {
        var res = "";
        if (node.obj !== null) {
            this.visit(node.obj);
            res = this._stack.pop() + ".";
        }
        res += node.member;
        this._stack.push(res);
        return node;
    };
    LambdaCompiler.prototype.visitIndex = function (node) {
        this.visit(node.obj);
        var res = this._stack.pop();
        this.visitMany(node.args);
        var n = node.args.length;
        var args = new Array(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }
        var argList = args.join(", ");
        res += "[" + argList + "]";
        this._stack.push(res);
        return node;
    };
    return LambdaCompiler;
}(ExpressionVisitor));
var FreeVariableScanner = (function (_super) {
    __extends(FreeVariableScanner, _super);
    function FreeVariableScanner() {
        _super.call(this);
        this._stack = [];
        this._result = [];
    }
    Object.defineProperty(FreeVariableScanner.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    FreeVariableScanner.prototype.visitParameter = function (node) {
        var found = false;
        for (var i = this._stack.length - 1; i >= 0; i--) {
            if (this._stack[i].indexOf(node) >= 0) {
                found = true;
                break;
            }
        }
        if (!found) {
            this._result.push(node);
        }
        return node;
    };
    FreeVariableScanner.prototype.visitLambda = function (node) {
        this._stack.push(node.parameters);
        this.visit(node.body);
        this._stack.pop();
        return node;
    };
    return FreeVariableScanner;
}(ExpressionVisitor));
var ExpressionType;
(function (ExpressionType) {
    ExpressionType[ExpressionType["Block"] = 0] = "Block";
    ExpressionType[ExpressionType["Constant"] = 1] = "Constant";
    ExpressionType[ExpressionType["Parameter"] = 2] = "Parameter";
    ExpressionType[ExpressionType["Lambda"] = 3] = "Lambda";
    ExpressionType[ExpressionType["Add"] = 4] = "Add";
    ExpressionType[ExpressionType["Subtract"] = 5] = "Subtract";
    ExpressionType[ExpressionType["Multiply"] = 6] = "Multiply";
    ExpressionType[ExpressionType["Divide"] = 7] = "Divide";
    ExpressionType[ExpressionType["Modulo"] = 8] = "Modulo";
    ExpressionType[ExpressionType["And"] = 9] = "And";
    ExpressionType[ExpressionType["Or"] = 10] = "Or";
    ExpressionType[ExpressionType["AndAlso"] = 11] = "AndAlso";
    ExpressionType[ExpressionType["OrElse"] = 12] = "OrElse";
    ExpressionType[ExpressionType["ExclusiveOr"] = 13] = "ExclusiveOr";
    ExpressionType[ExpressionType["Equal"] = 14] = "Equal";
    ExpressionType[ExpressionType["NotEqual"] = 15] = "NotEqual";
    ExpressionType[ExpressionType["LessThan"] = 16] = "LessThan";
    ExpressionType[ExpressionType["LessThanOrEqual"] = 17] = "LessThanOrEqual";
    ExpressionType[ExpressionType["GreaterThan"] = 18] = "GreaterThan";
    ExpressionType[ExpressionType["GreaterThanOrEqual"] = 19] = "GreaterThanOrEqual";
    ExpressionType[ExpressionType["LeftShift"] = 20] = "LeftShift";
    ExpressionType[ExpressionType["RightShift"] = 21] = "RightShift";
    ExpressionType[ExpressionType["ArrayIndex"] = 22] = "ArrayIndex";
    ExpressionType[ExpressionType["Assign"] = 23] = "Assign";
    ExpressionType[ExpressionType["AddAssign"] = 24] = "AddAssign";
    ExpressionType[ExpressionType["SubtractAssign"] = 25] = "SubtractAssign";
    ExpressionType[ExpressionType["ModuloAssign"] = 26] = "ModuloAssign";
    ExpressionType[ExpressionType["MultiplyAssign"] = 27] = "MultiplyAssign";
    ExpressionType[ExpressionType["DivideAssign"] = 28] = "DivideAssign";
    ExpressionType[ExpressionType["LeftShiftAssign"] = 29] = "LeftShiftAssign";
    ExpressionType[ExpressionType["RightShiftAssign"] = 30] = "RightShiftAssign";
    ExpressionType[ExpressionType["AndAssign"] = 31] = "AndAssign";
    ExpressionType[ExpressionType["OrAssign"] = 32] = "OrAssign";
    ExpressionType[ExpressionType["ExclusiveOrAssign"] = 33] = "ExclusiveOrAssign";
    ExpressionType[ExpressionType["Invoke"] = 34] = "Invoke";
    ExpressionType[ExpressionType["Not"] = 35] = "Not";
    ExpressionType[ExpressionType["Negate"] = 36] = "Negate";
    ExpressionType[ExpressionType["UnaryPlus"] = 37] = "UnaryPlus";
    ExpressionType[ExpressionType["OnesComplement"] = 38] = "OnesComplement";
    ExpressionType[ExpressionType["PostDecrementAssign"] = 39] = "PostDecrementAssign";
    ExpressionType[ExpressionType["PostIncrementAssign"] = 40] = "PostIncrementAssign";
    ExpressionType[ExpressionType["PreDecrementAssign"] = 41] = "PreDecrementAssign";
    ExpressionType[ExpressionType["PreIncrementAssign"] = 42] = "PreIncrementAssign";
    ExpressionType[ExpressionType["Quote"] = 43] = "Quote";
    ExpressionType[ExpressionType["Condition"] = 44] = "Condition";
    ExpressionType[ExpressionType["New"] = 45] = "New";
    ExpressionType[ExpressionType["Call"] = 46] = "Call";
    ExpressionType[ExpressionType["Member"] = 47] = "Member";
    ExpressionType[ExpressionType["Index"] = 48] = "Index";
    ExpressionType[ExpressionType["Extension"] = 49] = "Extension";
})(ExpressionType || (ExpressionType = {}));
var Binder = (function (_super) {
    __extends(Binder, _super);
    function Binder(resources) {
        _super.call(this);
        this._stack = [];
        this._resources = resources;
    }
    Binder.prototype.visitParameter = function (node) {
        var found = false;
        for (var i = this._stack.length - 1; i >= 0; i--) {
            if (this._stack[i].indexOf(node) >= 0) {
                found = true;
                break;
            }
        }
        if (!found) {
            return Expression.constant(this._resources[node.name]);
        }
        return node;
    };
    Binder.prototype.visitLambda = function (node) {
        this._stack.push(node.parameters);
        this.visit(node.body);
        this._stack.pop();
        return node;
    };
    return Binder;
}(ExpressionVisitor));
var PrintVisitor = (function (_super) {
    __extends(PrintVisitor, _super);
    function PrintVisitor() {
        _super.apply(this, arguments);
    }
    PrintVisitor.prototype.visitBlock = function (node) {
        var variables = this.visitMany(node.variables);
        var expressions = this.visitMany(node.expressions);
        return "Block([" + variables.join(", ") + "], " + expressions + ")";
    };
    PrintVisitor.prototype.visitConstant = function (node) {
        return "Constant(" + node.value + ")";
    };
    PrintVisitor.prototype.visitParameter = function (node) {
        return "Parameter(" + node.name + ")";
    };
    PrintVisitor.prototype.visitBinary = function (node) {
        return ExpressionType[node.nodeType] + "(" + this.visit(node.left) + ", " + this.visit(node.right) + ")";
    };
    PrintVisitor.prototype.visitUnary = function (node) {
        return ExpressionType[node.nodeType] + "(" + this.visit(node.operand) + ")";
    };
    PrintVisitor.prototype.visitConditional = function (node) {
        return "Conditional(" + this.visit(node.test) + ", " + this.visit(node.ifTrue) + ", " + this.visit(node.ifFalse) + ")";
    };
    PrintVisitor.prototype.visitLambda = function (node) {
        var body = this.visit(node.body);
        var children = this.visitMany(node.parameters);
        children.unshift(body);
        return "Lambda(" + children.join(", ") + ")";
    };
    PrintVisitor.prototype.visitInvoke = function (node) {
        var expression = this.visit(node.expression);
        var children = this.visitMany(node.args);
        children.unshift(expression);
        return "Invoke(" + children.join(", ") + ")";
    };
    PrintVisitor.prototype.visitCall = function (node) {
        var children = this.visitMany(node.args);
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        children.unshift(node.method);
        return "Call(" + children.join(", ") + ")";
    };
    PrintVisitor.prototype.visitNew = function (node) {
        var children = this.visitMany(node.args);
        children.unshift(node.type);
        return "New(" + children.join(", ") + ")";
    };
    PrintVisitor.prototype.visitMember = function (node) {
        var children = [];
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        children.unshift(node.member);
        return "Member(" + children.join(", ") + ")";
    };
    PrintVisitor.prototype.visitIndex = function (node) {
        var children = this.visitMany(node.args);
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        return "Index(" + children.join(", ") + ")";
    };
    return PrintVisitor;
}(ExpressionVisitorGeneric));
var Discriminators = (function () {
    function Discriminators() {
    }
    Discriminators.Constant = ":";
    Discriminators.OnesComplement = "~";
    Discriminators.Not = "!";
    Discriminators.Quote = "`";
    Discriminators.Plus = "+";
    Discriminators.Minus = "-";
    Discriminators.Multiply = "*";
    Discriminators.Divide = "/";
    Discriminators.Modulo = "%";
    Discriminators.Power = "^^";
    Discriminators.RightShift = ">>";
    Discriminators.LeftShift = "<<";
    Discriminators.LessThan = "<";
    Discriminators.LessThanOrEqual = "<=";
    Discriminators.GreaterThan = ">";
    Discriminators.GreaterThanOrEqual = ">=";
    Discriminators.Equal = "==";
    Discriminators.NotEqual = "!=";
    Discriminators.And = "&";
    Discriminators.AndAlso = "&&";
    Discriminators.Or = "|";
    Discriminators.OrElse = "||";
    Discriminators.ExclusiveOr = "^";
    Discriminators.Conditional = "?:";
    Discriminators.Lambda = "=>";
    Discriminators.Parameter = "$";
    Discriminators.Index = ".[]";
    Discriminators.Invocation = "()";
    Discriminators.MemberAccess = ".";
    Discriminators.MethodCall = ".()";
    Discriminators.New = "new";
    Discriminators.MemberInit = "{.}";
    Discriminators.ListInit = "{+}";
    Discriminators.NewArrayInit = "new[]";
    Discriminators.NewArrayBounds = "new[*]";
    Discriminators.ArrayLength = "#";
    Discriminators.ArrayIndex = "[]";
    Discriminators.Assign = "=";
    Discriminators.Block = "{...}";
    return Discriminators;
}());
var BonsaiVisitor = (function (_super) {
    __extends(BonsaiVisitor, _super);
    function BonsaiVisitor() {
        _super.apply(this, arguments);
        this.scopes = [];
    }
    BonsaiVisitor.prototype.visitBlock = function (node) {
        this.scopes.push(node.variables);
        var res = ["{...}", node.variables.map(function (v) { return v.name; }), this.visitMany(node.expressions)];
        this.scopes.pop();
        return res;
    };
    BonsaiVisitor.prototype.visitConstant = function (node) {
        return [":", node.value];
    };
    BonsaiVisitor.prototype.visitParameter = function (node) {
        var parameterIdx;
        var scopeIdx;
        var found = false;
        this.scopes.forEach(function (scope, i) {
            scope.forEach(function (p, j) {
                if (node === p) {
                    found = true;
                    scopeIdx = i;
                    parameterIdx = j;
                }
            });
        });
        return found ? ["$", scopeIdx, parameterIdx] : ["$", node.name];
    };
    BonsaiVisitor.prototype.visitBinary = function (node) {
        var i = "";
        switch (node.nodeType) {
            case ExpressionType.Add:
                i = "+";
                break;
            case ExpressionType.Subtract:
                i = "-";
                break;
            case ExpressionType.Multiply:
                i = "*";
                break;
            case ExpressionType.Divide:
                i = "/";
                break;
            case ExpressionType.Modulo:
                i = "%";
                break;
            case ExpressionType.And:
                i = "&";
                break;
            case ExpressionType.Or:
                i = "|";
                break;
            case ExpressionType.AndAlso:
                i = "&&";
                break;
            case ExpressionType.OrElse:
                i = "||";
                break;
            case ExpressionType.ExclusiveOr:
                i = "^";
                break;
            case ExpressionType.Equal:
                i = "===";
                break;
            case ExpressionType.NotEqual:
                i = "!==";
                break;
            case ExpressionType.LessThan:
                i = "<";
                break;
            case ExpressionType.LessThanOrEqual:
                i = "<=";
                break;
            case ExpressionType.GreaterThan:
                i = ">";
                break;
            case ExpressionType.GreaterThanOrEqual:
                i = ">=";
                break;
            case ExpressionType.LeftShift:
                i = "<<";
                break;
            case ExpressionType.RightShift:
                i = ">>";
                break;
            case ExpressionType.Assign:
                i = "=";
                break;
            case ExpressionType.AddAssign:
                i = "+=";
                break;
            case ExpressionType.SubtractAssign:
                i = "-=";
                break;
            case ExpressionType.MultiplyAssign:
                i = "*=";
                break;
            case ExpressionType.DivideAssign:
                i = "/=";
                break;
            case ExpressionType.ModuloAssign:
                i = "%=";
                break;
            case ExpressionType.LeftShiftAssign:
                i = "<<=";
                break;
            case ExpressionType.RightShiftAssign:
                i = ">>=";
                break;
            case ExpressionType.AndAssign:
                i = "&=";
                break;
            case ExpressionType.OrAssign:
                i = "|=";
                break;
            case ExpressionType.ExclusiveOrAssign:
                i = "^=";
                break;
        }
        return [i, this.visit(node.left), this.visit(node.right)];
    };
    BonsaiVisitor.prototype.visitUnary = function (node) {
        var i = "";
        switch (node.nodeType) {
            case ExpressionType.Negate:
                i = "-";
                break;
            case ExpressionType.UnaryPlus:
                i = "+";
                break;
            case ExpressionType.Not:
                i = "!";
                break;
            case ExpressionType.OnesComplement:
                i = "~";
                break;
            case ExpressionType.PostDecrementAssign:
                i = "a--";
                break;
            case ExpressionType.PostIncrementAssign:
                i = "a++";
                break;
            case ExpressionType.PreDecrementAssign:
                i = "--a";
                break;
            case ExpressionType.PreIncrementAssign:
                i = "++a";
                break;
            case ExpressionType.Quote:
                i = "`";
                break;
        }
        return [i, this.visit(node.operand)];
    };
    BonsaiVisitor.prototype.visitConditional = function (node) {
        return ["?:", this.visit(node.test), this.visit(node.ifTrue), this.visit(node.ifFalse)];
    };
    BonsaiVisitor.prototype.visitLambda = function (node) {
        var parameters = this.visitMany(node.parameters);
        var scope = [];
        node.parameters.forEach(function (p) { return scope.push(p); });
        this.scopes.push(scope);
        var body = this.visit(node.body);
        this.scopes.pop();
        return ["=>", body, parameters];
    };
    BonsaiVisitor.prototype.visitInvoke = function (node) {
        var expression = this.visit(node.expression);
        var args = this.visitMany(node.args);
        return ["()", expression, args];
    };
    BonsaiVisitor.prototype.visitCall = function (node) {
        var args = [];
        if (node.obj != null) {
            args.unshift(this.visit(node.obj));
        }
        args.unshift(this.visitMany(node.args));
        return [".()", node.method, args];
    };
    BonsaiVisitor.prototype.visitNew = function (node) {
        var args = this.visitMany(node.args);
        return ["new", args];
    };
    BonsaiVisitor.prototype.visitMember = function (node) {
        var res = [".", node.member];
        if (node.obj != null) {
            res.unshift(this.visit(node.obj));
        }
        return res;
    };
    BonsaiVisitor.prototype.visitIndex = function (node) {
        throw new Error("not implemented");
    };
    return BonsaiVisitor;
}(ExpressionVisitorGeneric));
var BonsaiParser = (function () {
    function BonsaiParser() {
        this.env = [];
    }
    BonsaiParser.prototype.visit = function (node) {
        var discriminator = node[0];
        switch (discriminator) {
            case Discriminators.Constant:
                return this.visitConstant(node);
            case Discriminators.OnesComplement:
                return this.visitOnesComplement(node);
            case Discriminators.Not:
                return this.visitNot(node);
            case Discriminators.Quote:
                return this.visitQuote(node);
            case Discriminators.Plus:
                return this.visitPlus(node);
            case Discriminators.Minus:
                return this.visitMinus(node);
            case Discriminators.Multiply:
                return this.visitMultiply(node);
            case Discriminators.Divide:
                return this.visitDivide(node);
            case Discriminators.Modulo:
                return this.visitModulo(node);
            case Discriminators.RightShift:
                return this.visitRightShift(node);
            case Discriminators.LeftShift:
                return this.visitLeftShift(node);
            case Discriminators.LessThan:
                return this.visitLessThan(node);
            case Discriminators.LessThanOrEqual:
                return this.visitLessThanOrEqual(node);
            case Discriminators.GreaterThan:
                return this.visitGreaterThan(node);
            case Discriminators.GreaterThanOrEqual:
                return this.visitGreaterThanOrEqual(node);
            case Discriminators.Equal:
                return this.visitEqual(node);
            case Discriminators.NotEqual:
                return this.visitNotEqual(node);
            case Discriminators.And:
                return this.visitAnd(node);
            case Discriminators.AndAlso:
                return this.visitAndAlso(node);
            case Discriminators.Or:
                return this.visitOr(node);
            case Discriminators.OrElse:
                return this.visitOrElse(node);
            case Discriminators.ExclusiveOr:
                return this.visitExclusiveOr(node);
            case Discriminators.Conditional:
                return this.visitConditional(node);
            case Discriminators.Lambda:
                return this.visitLambda(node);
            case Discriminators.Parameter:
                return this.visitParameter(node);
            case Discriminators.Index:
                return this.visitIndex(node);
            case Discriminators.Invocation:
                return this.visitInvocation(node);
            case Discriminators.MemberAccess:
                return this.visitMemberAccess(node);
            case Discriminators.MethodCall:
                return this.visitMethodCall(node);
            case Discriminators.New:
                return this.visitNew(node);
            case Discriminators.MemberInit:
                return this.visitMemberInit(node);
            case Discriminators.ListInit:
                return this.visitListInit(node);
            case Discriminators.NewArrayInit:
                return this.visitNewArrayInit(node);
            case Discriminators.NewArrayBounds:
                return this.visitNewArrayBounds(node);
            case Discriminators.ArrayLength:
                return this.visitArrayLength(node);
            case Discriminators.ArrayIndex:
                return this.visitArrayIndex(node);
            case Discriminators.Assign:
                return this.visitAssign(node);
            case Discriminators.Block:
                return this.visitBlock(node);
            default:
                throw new Error('not implemented');
        }
    };
    BonsaiParser.prototype.visitMany = function (nodes) {
        var _this = this;
        return nodes.map(function (n) { return _this.visit(n); });
    };
    BonsaiParser.prototype.visitConstant = function (node) {
        return Expression.constant(node[1]);
    };
    BonsaiParser.prototype.visitOnesComplement = function (node) {
        return Expression.onesComplement(this.visit(node[1]));
    };
    BonsaiParser.prototype.visitNot = function (node) {
        return Expression.not(this.visit(node[1]));
    };
    BonsaiParser.prototype.visitQuote = function (node) {
        return Expression.quote(this.visit(node[1]));
    };
    BonsaiParser.prototype.visitPlus = function (node) {
        if (node.length == 2) {
            return Expression.unaryPlus(this.visit(node[1]));
        }
        else if (node.length == 3) {
            return Expression.add(this.visit(node[1]), this.visit(node[2]));
        }
        else {
            throw new Error('not implemented');
        }
    };
    BonsaiParser.prototype.visitMinus = function (node) {
        if (node.length == 2) {
            return Expression.negate(this.visit(node[1]));
        }
        else if (node.length == 3) {
            return Expression.subtract(this.visit(node[1]), this.visit(node[2]));
        }
        else {
            throw new Error('not implemented');
        }
    };
    BonsaiParser.prototype.visitMultiply = function (node) {
        return Expression.multiply(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitDivide = function (node) {
        return Expression.divide(this.visit(node[1]), this.visit(node[1]));
    };
    BonsaiParser.prototype.visitModulo = function (node) {
        return Expression.modulo(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitRightShift = function (node) {
        return Expression.rightShift(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitLeftShift = function (node) {
        return Expression.leftShift(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitLessThan = function (node) {
        return Expression.lessThan(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitLessThanOrEqual = function (node) {
        return Expression.lessThanOrEqual(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitGreaterThan = function (node) {
        return Expression.greaterThan(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitGreaterThanOrEqual = function (node) {
        return Expression.greaterThanOrEqual(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitEqual = function (node) {
        return Expression.equal(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitNotEqual = function (node) {
        return Expression.notEqual(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitAnd = function (node) {
        return Expression.and(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitAndAlso = function (node) {
        return Expression.andAlso(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitOr = function (node) {
        return Expression.or(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitOrElse = function (node) {
        return Expression.orElse(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitExclusiveOr = function (node) {
        return Expression.exclusiveOr(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitConditional = function (node) {
        return Expression.condition(this.visit(node[1]), this.visit(node[2]), this.visit(node[3]));
    };
    BonsaiParser.prototype.visitLambda = function (node) {
        var parameters = node[2].map(function (p) { return Expression.parameter(p[1]); });
        this.env.push(parameters);
        var body = this.visit(node[1]);
        this.env.pop();
        return Expression.lambda(body, parameters);
    };
    BonsaiParser.prototype.visitParameter = function (node) {
        if (node.length == 3) {
            return this.env[node[1]][node[2]];
        }
        else if (node.length == 2) {
            return Expression.parameter(node[1]);
        }
        else {
            throw new Error('not implemented');
        }
    };
    BonsaiParser.prototype.visitIndex = function (node) {
        var d = node[0], e = node[1], args = node.slice(2);
        return Expression.index(this.visit(e), this.visitMany(args));
    };
    BonsaiParser.prototype.visitInvocation = function (node) {
        var d = node[0], e = node[1], args = node.slice(2);
        return Expression.invoke(this.visit(e), this.visitMany(args));
    };
    BonsaiParser.prototype.visitMemberAccess = function (node) {
        return Expression.member(this.visit(node[2]), node[1]);
    };
    BonsaiParser.prototype.visitMethodCall = function (node) {
        var d = node[0], m = node[1], e = node[2], args = node.slice(3);
        return Expression.functionCall(this.visit(e), m, this.visitMany(args));
    };
    BonsaiParser.prototype.visitNew = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitMemberInit = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitListInit = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitNewArrayInit = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitNewArrayBounds = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitArrayLength = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitArrayIndex = function (node) {
        throw new Error('not implemented');
    };
    BonsaiParser.prototype.visitAssign = function (node) {
        return Expression.assign(this.visit(node[1]), this.visit(node[2]));
    };
    BonsaiParser.prototype.visitBlock = function (node) {
        var variables = node[1].map(function (v) { return Expression.parameter(v[0]); });
        this.env.push(variables);
        var expressions = this.visitMany(node[2]);
        this.env.pop();
        return Expression.block(variables, expressions);
    };
    return BonsaiParser;
}());
//# sourceMappingURL=compiler.js.map