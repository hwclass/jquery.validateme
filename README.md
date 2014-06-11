## jquery.validateme 1.0.0

A basic jQuery plugin for validation plain, password and e-mail texts.

### usage

<pre lang="javascript">
<code>
$('#formId').validateMe();
</code>
</pre>

To clear all the validation status tooltip boxes, use the method below:

<pre lang="javascript">
<code>
function clearErrors () {
	$('div[id*=errorToolTip]').remove();
}
</code>
</pre>