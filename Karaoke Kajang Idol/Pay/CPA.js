'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Overlay = React.createClass({
	displayName: 'Overlay',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Overlay', style: { 'backgroundImage': 'url(' + this.props.image + ')' } },
			'Something'
		);
	}
});

var Container = React.createClass({
	displayName: 'Container',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Container' },
			this.props.children
		);
	}
});

var WorkspaceInformation = React.createClass({
	displayName: 'WorkspaceInformation',

	render: function render() {

		if (this.props.duration > 1) {
			var duration = this.props.duration + ' albums';
		} else {
			var duration = this.props.duration + ' album';
		}

		return React.createElement(
			'div',
			{ className: 'WorkspaceInformation' },
			React.createElement(
				'div',
				{ className: 'WorkspaceName' },
				this.props.name
			),
			React.createElement(
				'div',
				{ className: 'WorkspacePrice' },
				React.createElement(
					'div',
					{ className: 'Price' },
					this.props.price,
					' MYR'
				),
				React.createElement(
					'div',
					{ className: 'Duration' },
					'/ ',
					duration
				)
			)
		);
	}
});

var WorkspaceMeta = React.createClass({
	displayName: 'WorkspaceMeta',

	render: function render() {

		if (this.props.people > 1) {
			var people = this.props.people + ' people';
		} else {
			var people = this.props.people + ' person';
		}

		return React.createElement(
			'div',
			{ className: 'WorkspaceMeta' },
			React.createElement(
				'div',
				{ className: 'Description' },
				'Artist: ',
				React.createElement(
					'strong',
					null,
					'Charlie Puth'
				)
			),
			React.createElement(
				'div',
				{ className: 'Dates' },
				'Year: ',
				React.createElement(
					'strong',
					null,
					'2016'
				),
			)
		);
	}
});

var ImagePreview = React.createClass({
	displayName: 'ImagePreview',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'ImagePreview', style: { 'backgroundImage': 'url(' + this.props.image + ')' } },
			React.createElement(
				'div',
				{ className: 'WorkspaceOverview' },
				React.createElement(WorkspaceInformation, { name: 'Nine Track Mind', price: this.props.price, duration: '1' }),
				React.createElement(WorkspaceMeta, { people: this.props.people })
			)
		);
	}
});

var OrderSummary = React.createClass({
	displayName: 'OrderSummary',

	render: function render() {

		// Duration pluralisation
		if (this.props.duration > 1) {
			var duration = this.props.duration + ' albums';
		} else {
			var duration = this.props.duration + ' album';
		}

		// Initial total Calculation
		var initialTotal = this.props.duration * this.props.price;

		// Discount Calculation
		var discount = Math.floor(initialTotal / 100 * this.props.discount);

		// Subtotal (with Discount)
		var subTotal = initialTotal - discount;

		// Calculate tax
		var tax = Math.floor(subTotal / 100 * this.props.tax);

		// Total
		var total = subTotal + tax;

		return React.createElement(
			'div',
			{ className: 'OrderSummary' },
			React.createElement(
				'div',
				{ className: 'Title' },
				'Order Summary'
			),
			React.createElement(
				'table',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						this.props.price,
						' x ',
						duration
					),
					React.createElement(
						'td',
						null,
						initialTotal,
						' MYR'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Discount'
					),
					React.createElement(
						'td',
						null,
						discount,
						' MYR'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Subtotal'
					),
					React.createElement(
						'td',
						null,
						subTotal,
						' MYR'
					)
				),
				React.createElement(
					'tr',
					null,
					React.createElement(
						'td',
						null,
						'Tax'
					),
					React.createElement(
						'td',
						null,
						tax,
						' MYR'
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'Total' },
				React.createElement(
					'div',
					{ className: 'TotalLabel' },
					'Total'
				),
				React.createElement(
					'div',
					{ className: 'Amount' },
					total,
					' ',
					React.createElement(
						'small',
						null,
						'MYR'
					)
				)
			)
		);
	}
});

var PaymentForm = React.createClass({
	displayName: 'PaymentForm',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'PaymentForm' },
			React.createElement(
				'form',
				{ onSubmit: this.props.onSubmit },
				React.createElement(
					'div',
					{ className: 'Title' },
					'Payment information'
				),
				React.createElement(BasicInput, { name: 'name', label: 'Name on credit card', type: 'text', placeholder: 'John Smith' }),
				React.createElement(BasicInput, { name: 'card', label: 'Credit card number', type: 'number', placeholder: '0000 0000 0000 0000' }),
				React.createElement(ExpiryDate, null),
				React.createElement(CheckoutButton, null)
			)
		);
	}
});

var CheckoutButton = React.createClass({
	displayName: 'CheckoutButton',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'CheckoutButton' },
			React.createElement(
				'button',
				null,
				'Book securely'
			),
			React.createElement(
				'span',
				null,
				React.createElement('i', { className: 'fa fa-fw fa-lock' }),
				' Your credit card information is encrypted'
			)
		);
	}
});

var ExpiryDate = React.createClass({
	displayName: 'ExpiryDate',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'ExpiryDate' },
			React.createElement(
				'div',
				null,
				React.createElement(
					'label',
					null,
					'Expires on'
				),
				React.createElement(
					'div',
					{ className: 'Expiry' },
					React.createElement(
						'select',
						null,
						React.createElement(
							'option',
							{ value: '' },
							'January'
						),
						React.createElement(
							'option',
							{ value: '' },
							'February'
						),
						React.createElement(
							'option',
							{ value: '' },
							'March'
						),
						React.createElement(
							'option',
							{ value: '' },
							'April'
						),
						React.createElement(
							'option',
							{ value: '' },
							'May'
						),
						React.createElement(
							'option',
							{ value: '' },
							'June'
						),
						React.createElement(
							'option',
							{ value: '' },
							'July'
						),
						React.createElement(
							'option',
							{ value: '' },
							'August'
						),
						React.createElement(
							'option',
							{ value: '' },
							'September'
						),
						React.createElement(
							'option',
							{ value: '' },
							'October'
						),
						React.createElement(
							'option',
							{ value: '' },
							'November'
						),
						React.createElement(
							'option',
							{ value: '' },
							'December'
						)
					),
					React.createElement(
						'select',
						{ name: '', id: '' },
						React.createElement(
							'option',
							{ value: '' },
							'2016'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2017'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2018'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2019'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2020'
						),
						React.createElement(
							'option',
							{ value: '' },
							'2021'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'CVCField' },
				React.createElement(
					'label',
					null,
					'CVC'
				),
				React.createElement('input', { placeholder: '000', type: 'number' })
			)
		);
	}
});

var BasicInput = React.createClass({
	displayName: 'BasicInput',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'BasicInput' },
			React.createElement(
				'label',
				{ 'for': this.props.name },
				this.props.label
			),
			React.createElement('input', { id: this.props.name, type: this.props.type, placeholder: this.props.placeholder })
		);
	}
});

var Checkout = React.createClass({
	displayName: 'Checkout',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Checkout' },
			React.createElement(OrderSummary, { discount: this.props.discount, tax: this.props.tax, price: this.props.price, duration: this.props.duration }),
			React.createElement(PaymentForm, { onSubmit: this.props.onSubmit })
		);
	}
});

var Header = React.createClass({
	displayName: 'Header',

	render: function render() {
		return React.createElement(
			'header',
			null,
			React.createElement('input', { onChange: this.props.onChange, type: 'range', max: '100', min: '1', step: '1' })
		);
	}
});

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			mounted: false,
			price: 59.00,
			tax: 6,
			duration:5,
			discount: 5
		};
	},

	componentDidMount: function componentDidMount() {
		this.setState({ mounted: true });
	},

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
	},

	handleChange: function handleChange(e) {
		console.log(e.target.value);
		this.setState({ duration: e.target.value });
	},

	render: function render() {

		var overlay, container;
		if (this.state.mounted) {
			overlay = React.createElement(Overlay, { image: '../Album/HCP.jpg' });
			container = React.createElement(
				Container,
				null,
				React.createElement(ImagePreview, { price: this.state.price, duration: this.state.duration, people: this.state.people, image: '../Album/CPA.png' }),
				React.createElement(Checkout, { discount: this.state.discount, tax: this.state.tax, price: this.state.price, duration: this.state.duration, onSubmit: this.handleSubmit })
			);
		}

		return React.createElement(
			'div',
			{ className: 'App' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'overlay', transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
				overlay
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'container', transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
				container
			),
			React.createElement(Header, { onChange: this.handleChange })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));