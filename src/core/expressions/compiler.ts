class Expression {
    nodeType: ExpressionType;

    constructor(nodeType: ExpressionType) {
        this.nodeType = nodeType;
    }

    accept(visitor: ExpressionVisitor): Expression {
        throw new Error("not implemented");
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        throw new Error("not implemented");
    }

    toString(): string {
        return new PrintVisitor().visit(this);
    }

    toBonsai(): any {
        return new BonsaiVisitor().visit(this);
    }

    static block(variables: ParameterExpression[], expressions: Expression[]) {
        return new BlockExpression(variables, expressions);
    }

    static constant(value: any): ConstantExpression {
        return new ConstantExpression(value);
    }

    static parameter(name: string): ParameterExpression {
        return new ParameterExpression(name);
    }

    static condition(test: Expression, ifTrue: Expression, ifFalse: Expression): ConditionalExpression {
        return new ConditionalExpression(test, ifTrue, ifFalse);
    }

    static add(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Add, left, right);
    }

    static subtract(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Subtract, left, right);
    }

    static multiply(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Multiply, left, right);
    }

    static divide(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Divide, left, right);
    }

    static modulo(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Modulo, left, right);
    }

    static and(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.And, left, right);
    }

    static andAlso(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.AndAlso, left, right);
    }

    static or(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Or, left, right);
    }

    static orElse(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.OrElse, left, right);
    }

    static exclusiveOr(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.ExclusiveOr, left, right);
    }

    static equal(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Equal, left, right);
    }

    static notEqual(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.NotEqual, left, right);
    }

    static lessThan(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.LessThan, left, right);
    }

    static lessThanOrEqual(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.LessThanOrEqual, left, right);
    }

    static greaterThan(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.GreaterThan, left, right);
    }

    static greaterThanOrEqual(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.GreaterThanOrEqual, left, right);
    }

    static leftShift(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.LeftShift, left, right);
    }

    static rightShift(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.RightShift, left, right);
    }

    static arrayIndex(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.ArrayIndex, left, right);
    }

    static assign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.Assign, left, right);
    }

    static addAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.AddAssign, left, right);
    }

    static subtractAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.SubtractAssign, left, right);
    }

    static multiplyAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.MultiplyAssign, left, right);
    }

    static divideAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.DivideAssign, left, right);
    }

    static moduloAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.ModuloAssign, left, right);
    }

    static leftShiftAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.LeftShiftAssign, left, right);
    }

    static rightShiftAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.RightShiftAssign, left, right);
    }

    static andAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.AndAssign, left, right);
    }

    static orAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.OrAssign, left, right);
    }
    
    static exclusiveOrAssign(left: Expression, right: Expression): BinaryExpression {
        return new BinaryExpression(ExpressionType.ExclusiveOrAssign, left, right);
    }

    static not(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.Not, operand);
    }

    static unaryPlus(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.UnaryPlus, operand);
    }

    static negate(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.Negate, operand);
    }

    static onesComplement(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.OnesComplement, operand);
    }

    static postDecrementAssign(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.PostDecrementAssign, operand);
    }

    static postIncrementAssign(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.PostIncrementAssign, operand);
    }

    static preDecrementAssign(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.PreDecrementAssign, operand);
    }

    static preIncrementAssign(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.PreIncrementAssign, operand);
    }

    static quote(operand: Expression): UnaryExpression {
        return new UnaryExpression(ExpressionType.Quote, operand);
    }

    static lambda<T extends Function>(body: Expression, parameters: ParameterExpression[]): LambdaExpression<T> {
        return new LambdaExpression<T>(body, parameters);
    }

    static invoke(expression: Expression, args: Expression[]): InvocationExpression {
        return new InvocationExpression(expression, args);
    }

    static new(typeName: string, args: Expression[]): NewExpression {
        return new NewExpression(typeName, args);
    }

    static functionCall(obj: Expression, methodName: string, args: Expression[]): FunctionCallExpression {
        return new FunctionCallExpression(obj, methodName, args);
    }

    static member(obj: Expression, memberName: string): MemberExpression {
        return new MemberExpression(obj, memberName);
    }

    static index(obj: Expression, args: Expression[]): IndexExpression {
        return new IndexExpression(obj, args);
    }
}

class ExpressionVisitorGeneric<T> {
    visit(node: Expression): T {
        if (node === null) {
            return null;
        }
        return node.acceptGeneric(this);
    }

    visitBlock(node: BlockExpression): T { throw new Error("not implemented"); }

    visitConstant(node: ConstantExpression): T { throw new Error("not implemented"); }

    visitParameter(node: ParameterExpression): T { throw new Error("not implemented"); }

    visitBinary(node: BinaryExpression): T { throw new Error("not implemented"); }

    visitUnary(node: UnaryExpression): T { throw new Error("not implemented"); }

    visitConditional(node: ConditionalExpression): T { throw new Error("not implemented"); }

    visitLambda<TFunction extends Function>(node: LambdaExpression<TFunction>): T { throw new Error("not implemented"); }

    visitInvoke(node: InvocationExpression): T { throw new Error("not implemented"); }

    visitCall(node: FunctionCallExpression): T { throw new Error("not implemented"); }

    visitNew(node: NewExpression): T { throw new Error("not implemented"); }

    visitMember(node: MemberExpression): T { throw new Error("not implemented"); }

    visitIndex(node: IndexExpression): T { throw new Error("not implemented"); }

    visitExtension(node: Expression): T { throw new Error("not implemented"); }

    visitMany<E extends Expression>(nodes: E[]): T[] {
        var res = new Array<T>(nodes.length);

        for (var i = 0; i < nodes.length; i++) {
            var oldNode = nodes[i];
            var newNode = <T>this.visit(oldNode);
            res[i] = newNode;
        }

        return res;
    }
}

class ExpressionVisitor {
    visit(node: Expression): Expression {
        if (node === null) {
            return null;
        }
        return node.accept(this);
    }

    visitBlock(node: BlockExpression): Expression {
        return node;
    }

    visitConstant(node: ConstantExpression): Expression {
        return node;
    }

    visitParameter(node: ParameterExpression): Expression {
        return node;
    }

    visitBinary(node: BinaryExpression): Expression {
        return node.update(this.visit(node.left), this.visit(node.right));
    }

    visitUnary(node: UnaryExpression): Expression {
        return node.update(this.visit(node.operand));
    }

    visitConditional(node: ConditionalExpression): Expression {
        return node.update(this.visit(node.test), this.visit(node.ifTrue), this.visit(node.ifFalse));
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): Expression {
        return node.update(this.visit(node.body), this.visitMany(node.parameters));
    }

    visitInvoke(node: InvocationExpression): Expression {
        return node.update(this.visit(node.expression), this.visitMany(node.args));
    }

    visitCall(node: FunctionCallExpression): Expression {
        return node.update(this.visit(node.obj), this.visitMany(node.args));
    }

    visitNew(node: NewExpression): Expression {
        return node.update(this.visitMany(node.args));
    }

    visitMember(node: MemberExpression): Expression {
        return node.update(this.visit(node.obj));
    }

    visitIndex(node: IndexExpression): Expression {
        return node.update(this.visit(node.obj), this.visitMany(node.args));
    }

    visitExtension(node: Expression): Expression {
        throw new Error("not implemented");
    }

    visitMany<T extends Expression>(nodes: T[]): T[] {
        var res = new Array<T>(nodes.length);

        for (var i = 0; i < nodes.length; i++) {
            var oldNode = nodes[i];
            var newNode = <T>this.visit(oldNode);
            res[i] = newNode;
        }

        return res;
    }
}

class BlockExpression extends Expression {
    _variables: ParameterExpression[];
    _expressions: Expression[];

    constructor(variables: ParameterExpression[], expressions: Expression[]) {
        super(ExpressionType.Block);
        this._variables = variables;
        this._expressions = expressions;
    }

    get variables(): ParameterExpression[] {
        return this._variables;
    }

    get expressions(): Expression[] {
        return this._expressions;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitBlock(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitBlock(this);
    }

    update(variables: ParameterExpression[], expressions: Expression[]) {
        if (variables !== this._variables || expressions !== this._expressions) {
            return new BlockExpression(variables, expressions);
        }

        return this;
    }
}

class ConstantExpression extends Expression {
    _value: any;

    constructor(value: any) {
        super(ExpressionType.Constant);
        this._value = value;
    }

    get value(): any {
        return this._value;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitConstant(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitConstant(this);
    }
}

class LiteralConstantExpression extends Expression {
    _value: string;

    constructor(value: string) {
        super(ExpressionType.Constant);
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitConstant(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitConstant(this);
    }
}

class ParameterExpression extends Expression {
    _name: string;

    constructor(name: string) {
        super(ExpressionType.Parameter);
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitParameter(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitParameter(this);
    }

    let<T>(selector: (p: ParameterExpression) => T): T {
        return selector(this);
    }
}

class UnaryExpression extends Expression {
    _operand: Expression;

    constructor(nodeType: ExpressionType, operand: Expression) {
        super(nodeType);
        this._operand = operand;
    }

    get operand(): Expression {
        return this._operand;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitUnary(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitUnary(this);
    }

    update(operand: Expression): UnaryExpression {
        if (operand !== this._operand) {
            return new UnaryExpression(this.nodeType, operand);
        }

        return this;
    }
}

class BinaryExpression extends Expression {
    _left: Expression;
    _right: Expression;

    constructor(nodeType: ExpressionType, left: Expression, right: Expression) {
        super(nodeType);
        this._left = left;
        this._right = right;
    }

    get left(): Expression {
        return this._left;
    }

    get right(): Expression {
        return this._right;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitBinary(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitBinary(this);
    }

    update(left: Expression, right: Expression): BinaryExpression {
        if (left !== this._left || right !== this._right) {
            return new BinaryExpression(this.nodeType, left, right);
        }

        return this;
    }
}

class ConditionalExpression extends Expression {
    _test: Expression;
    _ifTrue: Expression;
    _ifFalse: Expression;

    constructor(test: Expression, ifTrue: Expression, ifFalse: Expression) {
        super(ExpressionType.Condition);
        this._test = test;
        this._ifTrue = ifTrue;
        this._ifFalse = ifFalse;
    }

    get test(): Expression {
        return this._test;
    }

    get ifTrue(): Expression {
        return this._ifTrue;
    }

    get ifFalse(): Expression {
        return this._ifTrue;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitConditional(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitConditional(this);
    }

    update(test: Expression, ifTrue: Expression, ifFalse: Expression): ConditionalExpression {
        if (test !== this._test || ifTrue !== this._ifTrue || ifFalse !== this._ifFalse) {
            return new ConditionalExpression(test, ifTrue, ifFalse);
        }

        return this;
    }
}

class LambdaExpression<TFunction extends Function> extends Expression {
    _body: Expression;
    _parameters: ParameterExpression[];

    constructor(body: Expression, parameters: ParameterExpression[]) {
        super(ExpressionType.Lambda);
        this._body = body;
        this._parameters = parameters;
    }

    get body(): Expression {
        return this._body;
    }

    get parameters(): ParameterExpression[] {
        return this._parameters;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitLambda<TFunction>(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitLambda<TFunction>(this);
    }

    update(body: Expression, parameters: ParameterExpression[]): LambdaExpression<TFunction> {
        if (body !== this._body || parameters !== this._parameters) {
            return new LambdaExpression<TFunction>(body, parameters);
        }

        return this;
    }

    compileToFunction(debug?: boolean): string {
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
    }

    compile(debug?: boolean): TFunction {
        var code = this.compileToFunction(debug);
        return <TFunction>eval(code)();
    }
}

class InvocationExpression extends Expression {
    _expression: Expression;
    _args: Expression[];

    constructor(expression: Expression, args: Expression[]) {
        super(ExpressionType.Invoke);
        this._expression = expression;
        this._args = args;
    }

    get expression(): Expression {
        return this._expression;
    }

    get args(): Expression[] {
        return this._args;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitInvoke(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitInvoke(this);
    }

    update(expression: Expression, args: Expression[]): InvocationExpression {
        if (expression !== this._expression || args !== this._args) {
            return new InvocationExpression(expression, args);
        }

        return this;
    }
}

class FunctionCallExpression extends Expression {
    _expression: Expression;
    _method: string;
    _args: Expression[];

    constructor(expression: Expression, methodName: string, args: Expression[]) {
        super(ExpressionType.Call);
        this._expression = expression;
        this._method = methodName;
        this._args = args;
    }

    get obj(): Expression {
        return this._expression;
    }

    get method(): string {
        return this._method;
    }

    get args(): Expression[] {
        return this._args;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitCall(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitCall(this);
    }

    update(expression: Expression, args: Expression[]): FunctionCallExpression {
        if (expression !== this._expression || args !== this._args) {
            return new FunctionCallExpression(expression, this._method, args);
        }

        return this;
    }
}

class IndexExpression extends Expression {
    _expression: Expression;
    _args: Expression[];

    constructor(expression: Expression, args: Expression[]) {
        super(ExpressionType.Index);
        this._expression = expression;
        this._args = args;
    }

    get obj(): Expression {
        return this._expression;
    }

    get args(): Expression[] {
        return this._args;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitIndex(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitIndex(this);
    }

    update(expression: Expression, args: Expression[]): IndexExpression {
        if (expression !== this._expression || args !== this._args) {
            return new IndexExpression(expression, args);
        }

        return this;
    }
}

class NewExpression extends Expression {
    _type: string;
    _args: Expression[];

    constructor(typeName: string, args: Expression[]) {
        super(ExpressionType.New);
        this._type = typeName;
        this._args = args;
    }

    get type(): string {
        return this._type;
    }

    get args(): Expression[] {
        return this._args;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitNew(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitNew(this);
    }

    update(args: Expression[]): NewExpression {
        if (args !== this._args) {
            return new NewExpression(this._type, args);
        }

        return this;
    }
}

class MemberExpression extends Expression {
    _obj: Expression;
    _member: string;

    constructor(obj: Expression, memberName: string) {
        super(ExpressionType.Member);
        this._obj = obj;
        this._member = memberName;
    }

    get obj(): Expression {
        return this._obj;
    }

    get member(): string {
        return this._member;
    }

    accept(visitor: ExpressionVisitor): Expression {
        return visitor.visitMember(this);
    }

    acceptGeneric<T>(visitor: ExpressionVisitorGeneric<T>): T {
        return visitor.visitMember(this);
    }

    update(obj: Expression): MemberExpression {
        if (obj !== this._obj) {
            return new MemberExpression(obj, this._member);
        }

        return this;
    }
}

class LambdaCompiler extends ExpressionVisitor {
    _stack: string[];

    constructor() {
        super();
        this._stack = [];
    }

    get code(): string {
        if (this._stack.length != 1)
            throw new Error("invalid code generation");

        return this._stack[0];
    }

    visitBlock(node: BlockExpression): Expression {
        var vars = node.variables.map(v => `var ${v.name};`);
        this.visitMany(node.expressions);

        var n = node.expressions.length;
        var exprs = new Array<string>(n);
        for (var i = 0; i < n; ++i) {
            exprs[n - i - 1] = this._stack.pop();
        }

        var varList = vars.join(' ');
        var exprList = exprs.join('; ');
        this._stack.push("{ " + varList + " " + exprList + "; }");
        return node;
    }

    visitConstant(node: ConstantExpression): Expression {
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
    }

    visitUnary(node: UnaryExpression): Expression {
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
    }

    visitBinary(node: BinaryExpression): Expression {
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
    }

    visitConditional(node: ConditionalExpression): Expression {
        this.visit(node.test);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);

        var f = this._stack.pop();
        var t = this._stack.pop();
        var c = this._stack.pop();

        var res = "(" + c + " ? " + t + " : " + f + ")";

        this._stack.push(res);

        return node;
    }

    visitParameter(node: ParameterExpression): Expression {
        this._stack.push(node.name);

        return node;
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): Expression {
        this.visitMany(node.parameters);
        this.visit(node.body);

        var body = this._stack.pop();

        var n = node.parameters.length;
        var args = new Array<string>(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }

        var allArgs = args.join(", ");

        var res = "function(" + allArgs + ") { " + body + "; }";

        this._stack.push(res);

        return node;
    }

    visitInvoke(node: InvocationExpression): Expression {
        this.visit(node.expression);
        this.visitMany(node.args);

        var n = node.args.length;
        var args = new Array<string>(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }

        var argList = args.join(", ");

        var func = this._stack.pop();

        var res = func + "(" + argList + ")";

        this._stack.push(res);

        return node;
    }

    visitCall(node: FunctionCallExpression): Expression {
        var res = "";

        if (node.obj !== null) {
            this.visit(node.obj);
            res = this._stack.pop() + ".";
        }

        this.visitMany(node.args);

        var n = node.args.length;
        var args = new Array<string>(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }

        var argList = args.join(", ");

        res += node.method + "(" + argList + ")";

        this._stack.push(res);

        return node;
    }

    visitNew(node: NewExpression): Expression {
        this.visitMany(node.args);

        var n = node.args.length;
        var args = new Array<string>(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }

        var argList = args.join(", ");

        var res = "new " + node.type + "(" + argList + ")";

        this._stack.push(res);

        return node;
    }

    visitMember(node: MemberExpression): Expression {
        var res = "";

        if (node.obj !== null) {
            this.visit(node.obj);
            res = this._stack.pop() + ".";
        }

        res += node.member;

        this._stack.push(res);

        return node;
    }

    visitIndex(node: IndexExpression): Expression {
        this.visit(node.obj);
        var res = this._stack.pop();

        this.visitMany(node.args);

        var n = node.args.length;
        var args = new Array<string>(n);
        for (var i = 0; i < n; i++) {
            args[n - i - 1] = this._stack.pop();
        }

        var argList = args.join(", ");

        res += "[" + argList + "]";

        this._stack.push(res);

        return node;
    }
}

class FreeVariableScanner extends ExpressionVisitor {
    _stack: Expression[][];
    _result: Expression[];

    constructor() {
        super();
        this._stack = [];
        this._result = [];
    }

    get result(): Expression[] {
        return this._result;
    }

    visitParameter(node: ParameterExpression): Expression {
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
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): Expression {
        this._stack.push(node.parameters);

        this.visit(node.body);

        this._stack.pop();

        return node;
    }
}

enum ExpressionType {
    Block,
    Constant,
    Parameter,
    Lambda,
    Add,
    Subtract,
    Multiply,
    Divide,
    Modulo,
    And,
    Or,
    AndAlso,
    OrElse,
    ExclusiveOr,
    Equal,
    NotEqual,
    LessThan,
    LessThanOrEqual,
    GreaterThan,
    GreaterThanOrEqual,
    LeftShift,
    RightShift,
    ArrayIndex,
    Assign,
    AddAssign,
    SubtractAssign,
    ModuloAssign,
    MultiplyAssign,
    DivideAssign,
    LeftShiftAssign,
    RightShiftAssign,
    AndAssign,
    OrAssign,
    ExclusiveOrAssign,
    Invoke,
    Not,
    Negate,
    UnaryPlus,
    OnesComplement,
    PostDecrementAssign,
    PostIncrementAssign,
    PreDecrementAssign,
    PreIncrementAssign,
    Quote,
    Condition,
    New,
    Call,
    Member,
    Index,
    Extension,
}

class Binder extends ExpressionVisitor {
    _stack: Expression[][];
    _resources: any;

    constructor(resources: any) {
        super();
        this._stack = [];
        this._resources = resources;
    }

    visitParameter(node: ParameterExpression): Expression {
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
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): Expression {
        this._stack.push(node.parameters);

        this.visit(node.body);

        this._stack.pop();

        return node;
    }
}

class PrintVisitor extends ExpressionVisitorGeneric<string> {
    visitBlock(node: BlockExpression): string {
        var variables = this.visitMany(node.variables);
        var expressions = this.visitMany(node.expressions);
        return "Block([" + variables.join(", ") + "], " + expressions + ")";
    }

    visitConstant(node: ConstantExpression): string {
        return "Constant(" + node.value + ")";
    }

    visitParameter(node: ParameterExpression): string {
        return "Parameter(" + node.name + ")";
    }

    visitBinary(node: BinaryExpression): string {
        return ExpressionType[node.nodeType] + "(" + this.visit(node.left) + ", " + this.visit(node.right) + ")";
    }

    visitUnary(node: UnaryExpression): string {
        return ExpressionType[node.nodeType] + "(" + this.visit(node.operand) + ")";
    }

    visitConditional(node: ConditionalExpression): string {
        return "Conditional(" + this.visit(node.test) + ", " + this.visit(node.ifTrue) + ", " + this.visit(node.ifFalse) + ")";
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): string {
        var body = this.visit(node.body);
        var children = this.visitMany(node.parameters);
        children.unshift(body);
        return "Lambda(" + children.join(", ") + ")";
    }

    visitInvoke(node: InvocationExpression): string {
        var expression = this.visit(node.expression);
        var children = this.visitMany(node.args);
        children.unshift(expression);
        return "Invoke(" + children.join(", ") + ")";
    }

    visitCall(node: FunctionCallExpression): string {
        var children = this.visitMany(node.args);
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        children.unshift(node.method);
        return "Call(" + children.join(", ") + ")";
    }

    visitNew(node: NewExpression): string {
        var children = this.visitMany(node.args);
        children.unshift(node.type);
        return "New(" + children.join(", ") + ")";
    }

    visitMember(node: MemberExpression): string {
        var children = <string[]>[];
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        children.unshift(node.member);
        return "Member(" + children.join(", ") + ")";
    }

    visitIndex(node: IndexExpression): string {
        var children = this.visitMany(node.args);
        if (node.obj != null) {
            children.unshift(this.visit(node.obj));
        }
        return "Index(" + children.join(", ") + ")";
    }
}

class Discriminators {
    static Constant = ":";
    static OnesComplement = "~";
    static Not = "!";
    static Quote = "`";
    static Plus = "+";
    static Minus = "-";
    static Multiply = "*";
    static Divide = "/";
    static Modulo = "%";
    static Power = "^^";
    static RightShift = ">>";
    static LeftShift = "<<";
    static LessThan = "<";
    static LessThanOrEqual = "<=";
    static GreaterThan = ">";
    static GreaterThanOrEqual = ">=";
    static Equal = "==";
    static NotEqual = "!=";
    static And = "&";
    static AndAlso = "&&";
    static Or = "|";
    static OrElse = "||";
    static ExclusiveOr = "^";
    static Conditional = "?:";
    static Lambda = "=>";
    static Parameter = "$";
    static Index = ".[]";
    static Invocation = "()";
    static MemberAccess = ".";
    static MethodCall = ".()";
    static New = "new";
    static MemberInit = "{.}";
    static ListInit = "{+}";
    static NewArrayInit = "new[]";
    static NewArrayBounds = "new[*]";
    static ArrayLength = "#";
    static ArrayIndex = "[]";
    static Assign = "=";
    static Block = "{...}";
}

class BonsaiVisitor extends ExpressionVisitorGeneric<any> {
    scopes: ParameterExpression[][] = [];

    visitBlock(node: BlockExpression): any {
        this.scopes.push(node.variables);
        var res = [ "{...}", node.variables.map(v => v.name), this.visitMany(node.expressions) ];
        this.scopes.pop();
        return res;
    }

    visitConstant(node: ConstantExpression): any {
        return [ ":", node.value ];
    }

    visitParameter(node: ParameterExpression): any {
        let parameterIdx: number;
        let scopeIdx: number;
        let found = false;

        this.scopes.forEach((scope, i) => {
            scope.forEach((p, j) => {
                if (node === p) {
                    found = true;
                    scopeIdx = i;
                    parameterIdx = j;
                }
            })
        });

        return found ? ["$", scopeIdx, parameterIdx] : ["$", node.name];
    }

    visitBinary(node: BinaryExpression): any {
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

        return [ i, this.visit(node.left), this.visit(node.right) ];
    }

    visitUnary(node: UnaryExpression): any {
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
    }

    visitConditional(node: ConditionalExpression): any {
        return ["?:", this.visit(node.test), this.visit(node.ifTrue), this.visit(node.ifFalse) ];
    }

    visitLambda<T extends Function>(node: LambdaExpression<T>): any {
        var parameters = this.visitMany(node.parameters);
        var scope: ParameterExpression[] = [];
        node.parameters.forEach(p => scope.push(p));
        this.scopes.push(scope);
        var body = this.visit(node.body);
        this.scopes.pop();
        return ["=>", body, parameters];
    }

    visitInvoke(node: InvocationExpression): any {
        var expression = this.visit(node.expression);
        var args = this.visitMany(node.args);
        return ["()", expression, args];
    }

    visitCall(node: FunctionCallExpression): any {
        var args = <any[]>[];
        if (node.obj != null) {
            args.unshift(this.visit(node.obj));
        }
        args.unshift(this.visitMany(node.args));
        return [".()", node.method, args];
    }

    visitNew(node: NewExpression): any {
        var args = this.visitMany(node.args);
        return ["new", args];
    }

    visitMember(node: MemberExpression): any {
        var res = [".", node.member];
        if (node.obj != null) {
            res.unshift(this.visit(node.obj));
        }
        return res;
    }

    visitIndex(node: IndexExpression): any {
        throw new Error("not implemented");
    }
}

class BonsaiParser {
    env: ParameterExpression[][] = [];

    visit(node: any[]): Expression {
        const discriminator:string = node[0];
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
    }

    visitMany(nodes: any[]) {
        return nodes.map(n => this.visit(n));
    }

    visitConstant(node: any[]) {
        return Expression.constant(node[1]);
    }

    visitOnesComplement(node: any[]) {
        return Expression.onesComplement(this.visit(node[1]));
    }

    visitNot(node: any[]) {
        return Expression.not(this.visit(node[1]));
    }

    visitQuote(node: any[]) {
        return Expression.quote(this.visit(node[1]));
    }

    visitPlus(node: any[]): Expression {
        if (node.length == 2) {
            return Expression.unaryPlus(this.visit(node[1]));
        } else if (node.length == 3) {
            return Expression.add(this.visit(node[1]), this.visit(node[2]));
        } else {
            throw new Error('not implemented');
        }
    }

    visitMinus(node: any[]): Expression {
        if (node.length == 2) {
            return Expression.negate(this.visit(node[1]));
        } else if (node.length == 3) {
            return Expression.subtract(this.visit(node[1]), this.visit(node[2]));
        } else {
            throw new Error('not implemented');
        }
    }

    visitMultiply(node: any[]) {
        return Expression.multiply(this.visit(node[1]), this.visit(node[2]));
    }

    visitDivide(node: any[]) {
        return Expression.divide(this.visit(node[1]), this.visit(node[1]));
    }

    visitModulo(node: any[]) {
        return Expression.modulo(this.visit(node[1]), this.visit(node[2]));
    }

    visitRightShift(node: any[]) {
        return Expression.rightShift(this.visit(node[1]), this.visit(node[2]));
    }

    visitLeftShift(node: any[]) {
        return Expression.leftShift(this.visit(node[1]), this.visit(node[2]));
    }

    visitLessThan(node: any[]) {
        return Expression.lessThan(this.visit(node[1]), this.visit(node[2]));
    }

    visitLessThanOrEqual(node: any[]) {
        return Expression.lessThanOrEqual(this.visit(node[1]), this.visit(node[2]));
    }

    visitGreaterThan(node: any[]) {
        return Expression.greaterThan(this.visit(node[1]), this.visit(node[2]));
    }

    visitGreaterThanOrEqual(node: any[]) {
        return Expression.greaterThanOrEqual(this.visit(node[1]), this.visit(node[2]));
    }

    visitEqual(node: any[]) {
        return Expression.equal(this.visit(node[1]), this.visit(node[2]));
    }

    visitNotEqual(node: any[]) {
        return Expression.notEqual(this.visit(node[1]), this.visit(node[2]));
    }

    visitAnd(node: any[]) {
        return Expression.and(this.visit(node[1]), this.visit(node[2]));
    }

    visitAndAlso(node: any[]) {
        return Expression.andAlso(this.visit(node[1]), this.visit(node[2]));
    }

    visitOr(node: any[]) {
        return Expression.or(this.visit(node[1]), this.visit(node[2]));
    }

    visitOrElse(node: any[]) {
        return Expression.orElse(this.visit(node[1]), this.visit(node[2]));
    }

    visitExclusiveOr(node: any[]) {
        return Expression.exclusiveOr(this.visit(node[1]), this.visit(node[2]));
    }

    visitConditional(node: any[]) {
        return Expression.condition(this.visit(node[1]), this.visit(node[2]), this.visit(node[3]))
    }

    visitLambda(node: any[]) {
        const parameters = node[2].map(p => Expression.parameter(p[1]));
        this.env.push(parameters);
        const body = this.visit(node[1]);
        this.env.pop();
        return Expression.lambda(body, parameters);
    }

    visitParameter(node: any[]) {
        if (node.length == 3) {
            return this.env[node[1]][node[2]];
        } else if (node.length == 2) {
            return Expression.parameter(node[1]);
        } else {
            throw new Error('not implemented');
        }
    }

    visitIndex(node: any[]): Expression {
        const [d, e, ...args] = node;
        return Expression.index(this.visit(e), this.visitMany(args));
    }

    visitInvocation(node: any[]) {
        const [d, e, ...args] = node;
        return Expression.invoke(this.visit(e), this.visitMany(args));
    }

    visitMemberAccess(node: any[]) {
        return Expression.member(this.visit(node[2]), node[1]);
    }

    visitMethodCall(node: any[]) {
        const [d, m, e, ...args] = node;
        return Expression.functionCall(this.visit(e), m, this.visitMany(args));
    }

    visitNew(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitMemberInit(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitListInit(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitNewArrayInit(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitNewArrayBounds(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitArrayLength(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitArrayIndex(node: any[]): Expression {
        throw new Error('not implemented');
    }

    visitAssign(node: any[]) {
        return Expression.assign(this.visit(node[1]), this.visit(node[2]));
    }

    visitBlock(node: any[]) {
        const variables = node[1].map(v => Expression.parameter(v[0]));
        this.env.push(variables);
        const expressions = this.visitMany(node[2]);
        this.env.pop();
        return Expression.block(variables, expressions);
    }
}