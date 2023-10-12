function nestedFunction(x)
{
    x = 50 ; // this overrides the value that was received by the function
    return function nestingLevel1(y)
    {
        return function nestingLevel(z)
        {
            return x+y+z;
        }
    }
}
descriptionText('Nested functions unleashed','blue');
display(nestedFunction(10)(20)(30));